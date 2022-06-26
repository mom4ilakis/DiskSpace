from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import uvicorn

from disk_usage import DiskUsageView

app = FastAPI()

app.mount('/static', StaticFiles(directory='./static'), name='static')


@app.get("/", response_class=HTMLResponse)
async def root():
    return DiskUsageView(['/home/cloudy/served/samba_share/Movies']).populate_html()


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8080)
