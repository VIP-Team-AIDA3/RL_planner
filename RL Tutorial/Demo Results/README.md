1. Gymnasium Environment (PureKinematicGrid)
Built a simulation environment adhering to the OpenAI Gymnasium rules (gym.Env). This standardizes our observation and action spaces, which allows us to change our RL algorithms later without needing to change the physics.

2. Realistic Physics
Moving away from basic up, down, left, right grid movements, our environment uses basic kinematics. Actions (up, down, left, right) translate to accelerations.
Velocity & Position Updates: The simulation tracks both position and velocity continuously, bounded by maximum speed and acceleration values.

3. Stochastic Noise
To simulate wind gusts, turbulence, or sensor drift, we added Gaussian noise to the agent's position (standard deviation is a parameter and the mean is 0). This ensures that our environment is not 100% deterministic.

4. State Discretization & Visualization
Built functions to map continuous positions and velocities into descretized states, this ensures that the state space is not infinite. Also created a grid density parameter to make the grid more continuous or less continuous.
Rendering: Created a render function using Matplotlib that renders the 2D grid environment. This shows the the agent's position as it is given the random acceleration values.

5. Next Steps
Acceleration Based Reward Function: Creating a reward parameter based on the jerk caused by sudden changes in acceleration, a real drone would break apart or have unwated consequences from fast changes in acceleration (Simon).

Quadratic Drag Force Modeling: Adding the quadratic aerodynamic drag force into the kinematics updates to simulate air resistance acting on the agent. Integrating this using the RK4 numerical method (Abishek).

Continuous Grid For Visualization: Adding a separate grid on top of the grid that the agent uses, to show the continous movement of the agent to verify the physics is working as intended (Nelson).

6. Required Imports:
gymnasium, numpy, matplotlib.pyplot, matplotlib.collections, matplotlib.patches, matplotlib.lines, enum, typing