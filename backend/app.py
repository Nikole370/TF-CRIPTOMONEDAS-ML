from fastapi import FastAPI, Query
from pydantic import BaseModel
from typing import List
import pandas as pd
import uvicorn

# Cargar el dataset de predicciones
pred_df = pd.read_csv("data/predicciones.csv")
pred_df.columns = pred_df.columns.str.strip()  # limpiar espacios si hay

# Crear la app
app = FastAPI(title="API de Recomendaciones de Criptomonedas")

# Habilitar CORS para permitir conexión desde Angular
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # puedes restringir esto luego
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Esto evita errores de seguridad al hacer peticiones desde el navegador.
# Modelo de entrada para simulación
class SimulacionInput(BaseModel):
    monto: float
    symbols: List[str]

# Endpoint 1: Obtener recomendaciones por umbral
@app.get("/recomendaciones")
def get_recomendaciones(umbral: float = Query(0.7, ge=0.0, le=1.0)):
    filtrado = pred_df[pred_df["proba_up_30d"] >= umbral]
    return filtrado[["symbol", "proba_up_30d", "target_return_30d"]].to_dict(orient="records")

# Endpoint 2: Simulación de inversión
@app.post("/simular")
def simular_inversion(data: SimulacionInput):
    seleccionadas = pred_df[pred_df["symbol"].isin(data.symbols)]
    if seleccionadas.empty:
        return {"error": "No se encontraron criptos con esos symbols."}

    monto_por_crypto = data.monto / len(seleccionadas)
    seleccionadas = seleccionadas.copy()
    seleccionadas["monto_invertido"] = monto_por_crypto
    seleccionadas["ganancia_%"] = seleccionadas["target_return_30d"]
    seleccionadas["ganancia_$"] = seleccionadas["ganancia_%"] * monto_por_crypto

    total = seleccionadas[["monto_invertido", "ganancia_$"]].sum().to_dict()

    return {
        "detalle": seleccionadas[["symbol", "monto_invertido", "ganancia_%", "ganancia_$"]].to_dict(orient="records"),
        "totales": total
    }

# Para correr localmente (opcional si usas uvicorn desde terminal)
# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8000)