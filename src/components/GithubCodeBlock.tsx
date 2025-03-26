import React, { useState, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";
//import { FaGithub } from "react-icons/fa";

const GithubCodeBlock = ({ url, language = "tsx" }) => {
    const [code, setCode] = useState("");
    const [githubUrl, setGithubUrl] = useState("");

    useEffect(() => {
        if (!url.includes("github.com")) {
            console.error("Invalid GitHub URL provided.");
            return;
        }

        // Convert GitHub file URL to raw URL if necessary
        let rawUrl = url;
        if (!url.includes("raw.githubusercontent.com")) {
            rawUrl = url
                .replace("github.com", "raw.githubusercontent.com")
                .replace("/blob/", "/")
                .replace("/main/", "/refs/heads/main/");
        }

        fetch(rawUrl)
            .then((res) => res.text())
            .then((data) => setCode(data))
            .catch((err) => console.error("Failed to fetch code:", err));

        // Store original GitHub file URL
        setGithubUrl(url);
    }, [url]);

    return (
        <div>
            {githubUrl && (
                <p>
                    {/* <FaGithub size={18} style={{ marginRight: "6px", verticalAlign: "middle" }} /> */}
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", fontWeight: "bold" }}>
                        View on GitHub
                    </a>
                </p>
            )}
            <CodeBlock language={language}>{code}</CodeBlock>
        </div>
    );
};

export default GithubCodeBlock;