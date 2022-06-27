from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from strawberry.fastapi import GraphQLRouter

from straw_berry import schema
from allowed_paths import PathManager

graphql_app = GraphQLRouter(schema)

ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://192.168.0.158:3000',
    'http://my.media.server:3000'
    'http://192.168.0.141:3000'
]

app = FastAPI()

app.include_router(graphql_app, prefix='/graphql')

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=['*'],
    allow_headers=['*']
)


@app.get('/')
async def root():
    return {'message': 'This is diskspace info!'}


@app.get('/allowed_paths')
async def get_allowed_paths():
    return sorted(PathManager.allowed_paths)


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8081)
