// Lockstep SIL wrapper: rumoca integrates the fixed-wing plant + SAFE inner
// loop; a Python process (outer_loop.py) is the outer-loop autopilot.
//
// The plant and SAFE loop are `RumocaFixedWingFlight` from
// FixedWingPlantGA.mo, copied verbatim from CogniPilot/rumoca_fixed_wing
// (results/FixedWingPlantGA.mo @ 3b972cc). This wrapper only:
//   * pins the flight mode to SAFE (mode = 1: attitude sticks -> surfaces),
//   * starts the aircraft at rest on its landing gear, aligned with the runway,
//   * exposes the four stick commands as top-level inputs for the UDP route.
//
// Frames: the harness outputs flight.p_n/p_e/p_d, u/v/w, q_*, rate_* in
// NED/FRD; outer_loop.py converts them to the ENU pose CubControl expects,
// exactly as site/src/rumoca_flight.js does.

model FixedWingPythonSIL
  constant Real pi = 3.141592653589793;

  parameter Real start_alt = 20 "Start altitude [m]";
  parameter Real wp1_e = -4.0 "First waypoint east [m]";
  parameter Real wp1_n = -5.0 "First waypoint north [m]";
  parameter Real yaw0_enu = atan2(wp1_n, wp1_e) "Runway heading, ENU [rad]";
  parameter Real yaw0_ned = atan2(sin(pi/2 - yaw0_enu), cos(pi/2 - yaw0_enu)) "Start heading, NED [rad]";

  parameter Real p0_n = 0.0 "Initial north position [m]";
  parameter Real p0_e = 0.0 "Initial east position [m]";
  parameter Real p0_d = -start_alt "Initial down position [m]";
  parameter Real u0 = 4.6 "Initial forward velocity [m/s]";
  parameter Real v0 = 0.0 "Initial right velocity [m/s]";
  parameter Real w0 = 0.0 "Initial down velocity [m/s]";
  parameter Real q0_w = cos(0.5*yaw0_ned) "Initial quaternion w";
  parameter Real q0_x = 0.0 "Initial quaternion x";
  parameter Real q0_y = 0.0 "Initial quaternion y";
  parameter Real q0_z = sin(0.5*yaw0_ned) "Initial quaternion z";
  parameter Real rate0_p = 0.0 "Initial roll rate [rad/s]";
  parameter Real rate0_q = 0.0 "Initial pitch rate [rad/s]";
  parameter Real rate0_r = 0.0 "Initial yaw rate [rad/s]";

  // Stick commands from the Python outer loop (already in plant convention:
  // the aileron sign flip of app.js is applied on the Python side). The
  // defaults are bindings, not start values, because the lockstep runner
  // ignores input start values. They match CubControl's initial outputs and
  // hold for the first 20 ms, before the first lockstep barrier.
  input Real throttle = 0.0;
  input Real elevator = 0.0;
  input Real aileron = 0.0;
  input Real rudder = 0.0;

  RumocaFixedWingFlight flight(
    vehicle(roll_fric = 0.005),
    p0_n = p0_n,
    p0_e = p0_e,
    p0_d = p0_d,
    u0 = u0,
    v0 = v0,
    w0 = w0,
    q0_w = q0_w,
    q0_x = q0_x,
    q0_y = q0_y,
    q0_z = q0_z,
    rate0_p = rate0_p,
    rate0_q = rate0_q,
    rate0_r = rate0_r
  );

equation
  flight.mode = 1.0;
  flight.throttle = throttle;
  flight.elevator = elevator;
  flight.aileron = aileron;
  flight.rudder = rudder;
end FixedWingPythonSIL;
