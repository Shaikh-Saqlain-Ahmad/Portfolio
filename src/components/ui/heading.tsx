
interface HeadingProp{
    text:string;
}
export function MyHeading({text}:HeadingProp) {
    return (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {text}
      </h1>
    )
  }

export default MyHeading;