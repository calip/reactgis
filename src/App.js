import React from "react";
import aircraft from "./models/a318.glb"
import { Viewer } from "resium";
import * as Resium from "resium";
import * as Cesium from 'cesium';

const position = Cesium.Cartesian3.fromDegrees(106.774124, -6.200000, 100);

function App() {
  return (
    <Viewer full>
      <Resium.Entity
                name="Airplane"
                label={"Airplane"}
                tracked 
                point={{ pixelSize: 50, color: Cesium.Color.BLUE }}
                position={position}
      >
        <Resium.ModelGraphics
                    scale={1}
                    uri={aircraft}
                    minimumPixelSize={100}
                    runAnimations
                    show
                    color={Cesium.Color.WHITE}
        />
      </Resium.Entity>
    </Viewer>
  );
}

export default App;
