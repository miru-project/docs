import { useEffect, useState } from "react";
import style from "./styles.module.css";
import { marked } from "marked";

export default function DownloadView() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>({});

  async function getLatestVersion() {
    const res = await fetch(
      "https://api.github.com/repos/miru-project/miru-app/releases/latest",
    );
    const json = await res.json();
    setData(json);
    setIsLoading(false);
  }

  useEffect(() => {
    getLatestVersion();
  }, []);

  return (
    <div className={style["download-view"]}>
      <h6>目前最新稳定版本： {data.name ?? "loading..."}</h6>
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
          <h6 className={style["new"]}>这个版本更新了什么 ?</h6>
          <div
            className={style["markdown-body"]}
            dangerouslySetInnerHTML={{ __html: marked.parse(data.body) }}
          ></div>
        </>
      )}
    </div>
  );
}
