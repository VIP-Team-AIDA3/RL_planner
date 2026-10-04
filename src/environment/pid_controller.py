class PIDController:
    def __init__(self, kp: float, ki: float, kd: float, output_limits: tuple[float | None, float | None] = (None, None)):
        self.kp = kp
        self.ki = ki
        self.kd = kd
        
        self.min_output, self.max_output = output_limits
        
        self._previous_error = 0.0
        self._integral = 0.0
        self._last_time = None

    def step(self, setpoint: float, current_value: float, dt: float) -> float:
        # Skip calculation on the very first tick if dt is 0
        if dt <= 0.0:
            return 0.0

        # 1. Calculate Error
        error = setpoint - current_value
        
        # 2. Proportional Term
        p = self.kp * error
        
        # 3. Integral Term (with basic anti-windup clamping)
        self._integral += error * dt
        i = self.ki * self._integral
        
        if self.max_output is not None and i > self.max_output:
            i = self.max_output
            self._integral = i / self.ki if self.ki != 0 else 0
        elif self.min_output is not None and i < self.min_output:
            i = self.min_output
            self._integral = i / self.ki if self.ki != 0 else 0

        # 4. Derivative Term
        derivative = (error - self._previous_error) / dt
        d = self.kd * derivative
        
        # Save error for next tick
        self._previous_error = error
        
        # Total output
        output = p + i + d
        
        # Clamp final output to limits
        if self.max_output is not None:
            output = min(output, self.max_output)
        if self.min_output is not None:
            output = max(output, self.min_output)
            
        return output

    def reset(self):
        """Resets the internal state of the controller."""
        self._previous_error = 0.0
        self._integral = 0.0
        self._last_time = None