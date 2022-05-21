from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter

from straw_berry import schema

graphql_app = GraphQLRouter(schema)

app = FastAPI()


app.include_router(graphql_app, prefix='/graphql')


@app.get('/')
async def root():
    return {'message': 'This is diskspace info!'}
