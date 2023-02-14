## **AteltaWeb**

To run the project first install the required node modules by running:

```
npm install --force 
```
Note you need to have react installed first. Once all the required node modules have been installed. Now just add the environment variables:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

Now run the app by running:

```bash 
npm start
```

## api
**Note** - This project is only compartible with python 3.10 and above

- Navigate to the api folder
``` bash
cd api
```
- install poetry and create a virtualenv with install all the requirements 

```bash
curl -sSL https://install.python-poetry.org | python3 -
poetry install 
```

- use venv instead of poetry
In case you are not familiar with poetry, you can also create a virtual environment wiht any other python environment management tool and run the following command

```bash
pip install -r requirements.txt
```

- run uvicorn serve 
```bash
python app.py 
```