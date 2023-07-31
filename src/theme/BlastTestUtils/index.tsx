import React, {useState} from 'react';
import MDXCode from '@theme/MDXComponents/Code';

export interface ExampleFile {
    version: number;
    fileName: string;
    fileType: string;
    content: string;
}

export default function BlastTestUtils(): JSX.Element {
    const languages = [
        'PHP_UNIT', 'PYTHON', 'NODE_JS', 'C_SHARP', 'JAVA'
    ];

    const [utils, setUtils] = useState<ExampleFile[]>([]);
    const [selectedLanguage, selectLanguage] = useState<string | undefined>(undefined);

    const selectNewLanguage = async (value) => {
        console.log(value);
        if (value) {
            const domain = location.hostname.includes('localhost') ? 'http://localhost:8080' : 'https://jarvis.bit-academy.nl';
            const response = await fetch(`${domain}/api/v1/blast/testutils/${value}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            setUtils(result);
            selectLanguage(value);
        }
    }

    const selectStyle = {
        float: 'right'
    };

    return (
        <div>
            <select name="language"
                    style={selectStyle}
                    onChange={e => selectNewLanguage(e.target.value)}>
                <option></option>
                {languages.map(function (object, i) {
                    return <option value={object}>{object}</option>;
                })}
            </select>
            {utils.map(function (exampleFile, i) {
                return <MDXCode language={exampleFile.fileType} title={exampleFile.fileName}>
                    {exampleFile.content}
                </MDXCode>;
            })}
            {(() => {
                if (utils.length == 0 && selectedLanguage != undefined) {
                    return (
                        <p>No utils to show</p>
                    )
                }
                return null;
            })()}
        </div>
    );
}
