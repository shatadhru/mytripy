export interface AuthConfig {
  /* -------------------------------------------------------------------------- */
  /* General */
  /* -------------------------------------------------------------------------- */

  enabled: boolean;

  /* -------------------------------------------------------------------------- */
  /* Authentication */
  /* -------------------------------------------------------------------------- */

  login: {
    enabled: boolean;
    usernameField: "email" | "username" | "phone";
    allowRememberMe: boolean;
    maxAttempts: number;
    lockoutDuration: number;
  };

  register: {
    enabled: boolean;
    defaultRole: string;
    autoLogin: boolean;
    requireEmailVerification: boolean;
    requirePhoneVerification: boolean;
    allowDuplicateEmail: boolean;
    allowDuplicateUsername: boolean;
  };

  /* -------------------------------------------------------------------------- */
  /* Password */
  /* -------------------------------------------------------------------------- */

  password: {
    minLength: number;
    maxLength: number;

    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumber: boolean;
    requireSpecialCharacter: boolean;

    expireAfterDays: number;

    allowReuse: boolean;

    bcryptRounds: number;
  };

  /* -------------------------------------------------------------------------- */
  /* Email Verification */
  /* -------------------------------------------------------------------------- */

  verifyEmail: {
    enabled: boolean;
    expiresInMinutes: number;
    resendCooldown: number;
  };

  /* -------------------------------------------------------------------------- */
  /* Phone Verification */
  /* -------------------------------------------------------------------------- */

  verifyPhone: {
    enabled: boolean;
    otpLength: number;
    otpExpiresInMinutes: number;
    resendCooldown: number;
  };

  /* -------------------------------------------------------------------------- */
  /* Forgot Password */
  /* -------------------------------------------------------------------------- */

  forgotPassword: {
    enabled: boolean;
    expiresInMinutes: number;
  };

  /* -------------------------------------------------------------------------- */
  /* Session */
  /* -------------------------------------------------------------------------- */

  session: {
    driver: "database" | "redis";
    maxDevices: number;
    expiresInDays: number;
    invalidateOnPasswordChange: boolean;
  };

  /* -------------------------------------------------------------------------- */
  /* JWT */
  /* -------------------------------------------------------------------------- */

  jwt: {
    enabled: boolean;
    accessTokenExpiresIn: string;
    refreshTokenExpiresIn: string;
  };

  /* -------------------------------------------------------------------------- */
  /* Cookies */
  /* -------------------------------------------------------------------------- */

  cookies: {
    secure: boolean;
    httpOnly: boolean;
    sameSite: "strict" | "lax" | "none";
    domain?: string;
  };

  /* -------------------------------------------------------------------------- */
  /* Roles */
  /* -------------------------------------------------------------------------- */

  roles: string[];

  defaultRole: string;

  superAdminRole: string;

  /* -------------------------------------------------------------------------- */
  /* Social Login */
  /* -------------------------------------------------------------------------- */

  social: {
    google: boolean;
    github: boolean;
    facebook: boolean;
    discord: boolean;
    microsoft: boolean;
  };

  /* -------------------------------------------------------------------------- */
  /* Two Factor Authentication */
  /* -------------------------------------------------------------------------- */

  twoFactor: {
    enabled: boolean;
    issuer: string;
    backupCodes: boolean;
  };

  /* -------------------------------------------------------------------------- */
  /* API Routes */
  /* -------------------------------------------------------------------------- */

  routes: {
    login: string;
    register: string;
    logout: string;

    refreshToken: string;

    forgotPassword: string;

    resetPassword: string;

    verifyEmail: string;

    resendVerification: string;

    profile: string;

    session: string;
  };

  /* -------------------------------------------------------------------------- */
  /* Redirects */
  /* -------------------------------------------------------------------------- */

  redirects: {
    afterLogin: string;
    afterLogout: string;
    afterRegister: string;
    afterVerifyEmail: string;
  };

  /* -------------------------------------------------------------------------- */
  /* Middleware */
  /* -------------------------------------------------------------------------- */

  middleware: {
    guest: string;
    authenticated: string;
    admin: string;
  };

  /* -------------------------------------------------------------------------- */
  /* Audit */
  /* -------------------------------------------------------------------------- */

  audit: {
    enabled: boolean;
    logLogin: boolean;
    logLogout: boolean;
    logRegister: boolean;
    logPasswordReset: boolean;
  };
}
