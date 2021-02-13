export default function (func) {
  return func.constructor.name === "AsyncFunction";
}
