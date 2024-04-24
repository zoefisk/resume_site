import {ReactNode} from "react";

export default function DemoLayout(props:{children:ReactNode}) {
    return(
        <div>
            layout stuff
            {props.children}
        </div>
    )
}