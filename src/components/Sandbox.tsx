export interface SandboxProps {
  content?: string;
  runInDoc?: boolean;
  isVisible: boolean;
}

export const Sandbox = ({ content, runInDoc, isVisible }: SandboxProps) => {
  let url, srcDoc;
  if (content) {
    if (!content.startsWith('<!')) {
      content = `<!doctype html><meta charset=utf8><style>body{margin:0;height:100vh}</style><body>${content}</body>`;
    }
    console.log(content);
    srcDoc = content;

    // if (runInDoc) {
    //   srcDoc = content;
    // } else {
    //   const bolb = new Blob([content], { type: 'text/html' });
    //   url = URL.createObjectURL(bolb);
    //   // bolb = encodeURIComponent(html)
    //   // url = 'data:text/html;charset=utf-8,' + bolb
    // }
  }

  return (
    <>
      {isVisible && (
        <div id="sandbox-preview">
          <iframe
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock"
            srcDoc={srcDoc}
            src={url}
            title="Sandbox Preview"
          />
        </div>
      )}
    </>
  );
};
