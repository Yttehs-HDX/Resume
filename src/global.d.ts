/**
 * Global type declarations
 */

/**
 * CSS module type declaration
 * Allows importing .css files as modules
 */
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
