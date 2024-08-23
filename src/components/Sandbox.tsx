export interface SandboxProps {
  content?: string;
  runInDoc?: boolean;
  isVisible: boolean;
}

export const Sandbox = ({ content, runInDoc, isVisible }: SandboxProps) => {
  let url, srcDoc;
  if (content) {
    if (content.trim().slice(0, 5).toLowerCase() !== '<html') {
      content = `<html><head><meta charset=utf-8></head><body>${content}</body>`;
    }
    if (runInDoc) {
      srcDoc = content;
    } else {
      const bolb = new Blob([content], { type: 'text/html' });
      url = URL.createObjectURL(bolb);
      // bolb = encodeURIComponent(html)
      // url = 'data:text/html;charset=utf-8,' + bolb
    }
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
