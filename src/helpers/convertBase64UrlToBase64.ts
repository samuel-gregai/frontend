export function base64UrlToBase64(base64Url: string): string {
    return base64Url.replace(/-/g, '+').replace(/_/g, '/').padEnd(base64Url.length + (4 - base64Url.length % 4) % 4, '=');
}