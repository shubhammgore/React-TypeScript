type GreetProps = {
    name: string
}

export const Great = (props: GreetProps) => {
  return (
    <div>Welcome {props.name} ! you have 12 unreaded messages</div>
  )
}
