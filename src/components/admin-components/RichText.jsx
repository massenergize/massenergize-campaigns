import React, { useState } from "react";
import { Editor as TinyEditor } from "@tinymce/tinymce-react";
const TINY_MCE_API_KEY = process.env.REACT_APP_TINY_MCE_KEY;

function MERichText (props) {
    const [editor, setEditor] = useState(null);
    const { onEditorChange } = props;


    const handleEditorChange = (content, _editor) => {
        setEditor(_editor);
        if (!onEditorChange) return;
        onEditorChange(content, _editor);
    };
    return (
        <div>
            <label className="mb-2">{props?.label}</label>
            <TinyEditor
                onInit={(editor) => {
                    let ed = editor?.target?.editorCommands || {};
                    setEditor(ed?.editor);
                }}
                {...props}
                onEditorChange={handleEditorChange}
                toolbar="undo redo | blocks | formatselect | media_library | bold italic backcolor forecolor | alignleft aligncenter alignright alignjustify | link | bullist numlist outdent indent | fontfamily | fontsize |"
                plugins="advlist media_library autolink lists link charmap print preview anchor forecolor"
                init={{
                    height: 350,
                    menubar: false,
                    default_link_target: "_blank",
                    force_br_newlines: true,
                    force_p_newlines: false,
                    forced_root_block: "", // Needed for 3.x
                }}
                apiKey={TINY_MCE_API_KEY}
            />
        </div>
    );
}

export default MERichText;
