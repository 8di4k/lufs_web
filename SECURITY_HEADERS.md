# Security Headers Documentation

## Content Security Policy (CSP)

This document describes the Content Security Policy (CSP) headers implemented for the LUFS Web application.

### CSP Policy

```
default-src 'self';
script-src 'self' 'unsafe-eval';
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self' data:;
connect-src 'self' https:;
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
```

### Directives Explanation

#### `default-src 'self'`
Default source for all content types. Restricts to same-origin only.

#### `script-src 'self' 'unsafe-eval'`
- **'self'**: Allows scripts from the same origin
- **'unsafe-eval'**: Required for:
  - **Three.js**: WebGL shader compilation at runtime
  - **React Three Fiber**: Dynamic Three.js initialization
  - **Framer Motion**: Animation calculations and dynamic style generation
  - **GSAP**: Animation timeline execution

**Note**: While `unsafe-eval` is necessary for these libraries, the application uses them in a controlled manner. Consider migrating to `strict-dynamic` or WebAssembly alternatives in future versions for enhanced security.

#### `style-src 'self' 'unsafe-inline'`
- **'self'**: Allows styles from the same origin
- **'unsafe-inline'**: Required for:
  - **Tailwind CSS**: May generate inline styles
  - **Framer Motion**: Dynamic inline styles for animations
  - **styled-components / CSS-in-JS**: Runtime style injection

#### `img-src 'self' data: https:`
- **'self'**: Images from the same origin
- **data:**: Allows data URIs (canvas rendering from Three.js, generated images)
- **https:**: Allows images from external HTTPS sources (CDNs, analytics)

#### `font-src 'self' data:`
- **'self'**: Fonts from the same origin
- **data:**: Allows embedded font data

#### `connect-src 'self' https:`
- **'self'**: API calls to same-origin endpoints
- **https:**: External HTTPS connections (analytics, APIs)

#### `frame-ancestors 'none'`
Prevents the application from being embedded in iframes (clickjacking protection).

#### `base-uri 'self'`
Restricts the base URL to same-origin only.

#### `form-action 'self'`
Restricts form submissions to same-origin only.

### Dependencies Using Dynamic Code Execution

The following dependencies require `unsafe-eval`:

1. **Three.js** (v0.180.0+)
   - WebGL shader compilation at runtime
   - Dynamic material and geometry creation

2. **React Three Fiber** (v9.4.0+)
   - Three.js wrapper for React
   - Dynamic scene graph management

3. **Framer Motion** (v12.23.24+)
   - Animation value calculations
   - CSS variable interpolation

4. **GSAP** (v3.13.0+)
   - Timeline execution
   - Easing function calculations

### Implementation

Security headers are implemented in two places:

1. **Next.js Configuration** (`next.config.ts`)
   - Headers are set at the application level
   - Applies to all Next.js routes

2. **Nginx Configuration** (`nginx.conf`)
   - Headers are set at the reverse proxy level
   - Provides defense-in-depth when app runs behind Nginx
   - Includes HSTS for HTTPS connections

### Testing CSP Headers

#### Using curl
```bash
curl -i http://localhost:3000
```

Check for the `Content-Security-Policy` header in the response.

#### Using Browser DevTools
1. Open Developer Tools (F12)
2. Go to Network tab
3. Refresh the page
4. Click on any request
5. Check Response Headers section for `content-security-policy`

#### CSP Violations
If you see CSP violations in the browser console, they will appear as:
```
Refused to [action] [resource] because it violates the following Content Security Policy directive: "[directive]".
```

**Common issues and solutions:**
- Inline scripts → Use script tags without inline code
- Unsafe styles → Extract to external CSS files
- Third-party resources → Update CSP to allow specific domains

### Additional Security Headers

In addition to CSP, the following security headers are implemented:

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Frame-Options` | DENY | Prevent clickjacking attacks |
| `X-Content-Type-Options` | nosniff | Prevent MIME sniffing |
| `X-XSS-Protection` | 1; mode=block | Legacy XSS protection |
| `Referrer-Policy` | strict-origin-when-cross-origin | Control referrer information |
| `Permissions-Policy` | camera=(), microphone=(), geolocation=() | Disable unnecessary APIs |

### Future Improvements

1. **Remove `unsafe-eval`**: Investigate newer versions of Three.js, Framer Motion, and GSAP that may not require eval
2. **Use `strict-dynamic`**: Migrate to script-based CSP with nonce generation
3. **Resource Integrity**: Add `integrity` attributes to external resources
4. **Report-URI**: Implement CSP violation reporting for monitoring

### References

- [Content Security Policy Reference](https://content-security-policy.com/)
- [OWASP CSP Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
- [MDN Web Docs - CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Three.js Security](https://threejs.org/)
- [Framer Motion Performance](https://www.framer.com/motion/)

### Questions or Issues?

If you encounter CSP-related issues or have questions about the security headers, please:
1. Check the browser console for CSP violations
2. Review this documentation
3. Open an issue on GitHub with the CSP violation message
