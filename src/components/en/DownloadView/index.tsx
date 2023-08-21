import {useEffect, useState} from "react";
import {marked} from "marked";
import style from '@components/DownloadView/styles.module.css';

export default function DownloadView() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>({});

    async function getLatestVersion() {
        const json = await fetch(
            "https://api.github.com/repos/miru-project/miru-app/releases/latest",
        ).then((res) => res.json());
        setData(json);
        setIsLoading(false);
    }

    useEffect(() => {
        getLatestVersion();
    }, []);

    return (
        <div className={style["download-view"]}>
            <h6>The latest stable version： {data.name ?? "loading..."}</h6>
            {isLoading ? null : (
                <>
                    <div className={style["button-container"]}>
                        {data.assets.map((asset: any) => (
                            <a
                                className={style["button"]}
                                href={asset.browser_download_url}
                                target="_blank"
                            >
                                {asset.name}
                            </a>
                        ))}
                    </div>
                    <h6 className={style["new"]}>What's new in this version?</h6>
                    <div
                        className={style["markdown-body"]}
                        dangerouslySetInnerHTML={{__html: marked.parse(data.body)}}
                    ></div>
                </>
            )}
        </div>
    );
}
