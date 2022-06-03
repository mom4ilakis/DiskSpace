from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter

from straw_berry import schema
from validations import ALLOWED_PATHS

graphql_app = GraphQLRouter(schema)

ALLOWED_ORIGINS = [
    'http://localhost:3000'
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_headers=['*']
)

app.include_router(graphql_app, prefix='/graphql')


@app.get('/')
async def root():
    return {'message': 'This is diskspace info!'}


@app.get('/allowed_paths')
async def get_allowed_paths():
    return list(ALLOWED_PATHS)
