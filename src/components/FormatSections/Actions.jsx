import { useState, useRef, useEffect } from "react";
import { FormatIcons } from "./FormatIcons";
// import TextEditor from "../texteditor/TextEditor";
// import { useRecoilState } from "recoil";


export function Actions() {

    const [content, setContent] = useState("google")
    const [selectedAction, setSelectedAction] = useState('p')
    
    const divRef = useRef()

    const handlePerformAction = (action) => {
        // setSelectedAction(action)
        document.execCommand(action)
    };

    useEffect(() => {
        const range = document.createRange();
        const target = divRef.current;
    
        range.selectNodeContents(target);
        range.collapse(false);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }, [content]);


    function onChange(e) {
        setContent(
            `<${selectedAction}>${e.target.innerText}</${selectedAction}>`
        )
    }

    return (
        <div>

            <FormatIcons onClick={handlePerformAction}/>


            <div
                ref={divRef}
                contentEditable
                onKeyUp={onChange}
                dangerouslySetInnerHTML={{
                    __html: content
                }}
            >

            </div>

        </div>
    );
}
