from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from disk_usage import DiskUsageView

app = FastAPI()

app.mount('static', StaticFiles(directory='./static'), name='static')


@app.get("/", response_class=HTMLResponse)
async def root():
    return DiskUsageView().populate_html()
