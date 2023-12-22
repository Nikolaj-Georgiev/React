/* eslint-disable react/prop-types */
export default function Li({ children, ...props }) {
  return <li {...props}>{children}</li>;
}
