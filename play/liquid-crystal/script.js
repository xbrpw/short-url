import * as THREE from "https://cdn.skypack.dev/three@0.133.1";
import ky from "https://cdn.skypack.dev/kyouka@1.2.5";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/loaders/FBXLoader";
import Stats from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/libs/stats.module";
const calcAspect = (el) => el.clientWidth / el.clientHeight;
const getNormalizedMousePos = (e) => {
    return {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
    };
};
const liquidCrystalVertexShader = `
#define GLSLIFY 1
//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

const float PI = 3.14159265359;

vec4 getWorldNormal(mat4 modelMat,vec3 normal){
    vec4 worldNormal=normalize((modelMat*vec4(normal,0.)));
    return worldNormal;
}

uniform float uTime;
uniform vec2 uMouse;

varying vec2 vUv;
varying vec3 vWorldNormal;

vec3 distort(vec3 p){
    vec3 pointDirection=normalize(p);
    vec3 mousePoint=vec3(uMouse,1.);
    vec3 mouseDirection=normalize(mousePoint);
    float mousePointAngle=dot(pointDirection,mouseDirection);
    
    float freq=1.5;
    float t=uTime*100.;
    
    float f=PI*freq;
    float fc=mousePointAngle*f;
    
    vec3 n11=pointDirection*1.5;
    vec3 n12=vec3(uTime)*4.;
    float dist=smoothstep(.4,1.,mousePointAngle);
    float n1a=dist*2.;
    float noise1=snoise(n11+n12)*n1a;
    
    vec3 n21=pointDirection*1.5;
    vec3 n22=vec3(0.,0.,uTime)*2.;
    vec3 n23=vec3(uMouse,0.)*.2;
    float n2a=.8;
    float noise2=snoise(n21+n22+n23)*n2a;
    
    float mouseN1=sin(fc+PI+t);
    float mouseN2=smoothstep(f,f*2.,fc+t);
    float mouseN3=smoothstep(f*2.,f,fc+t);
    float mouseNa=4.;
    float mouseNoise=mouseN1*mouseN2*mouseN3*mouseNa;
    
    float noise=noise1+noise2+mouseNoise;
    vec3 distortion=pointDirection*(noise+length(p));
    return distortion;
}

// http://lolengine.net/blog/2013/09/21/picking-orthogonal-vector-combing-coconuts
vec3 orthogonal(vec3 v){
    return normalize(abs(v.x)>abs(v.z)?vec3(-v.y,v.x,0.)
    :vec3(0.,-v.z,v.y));
}

// https://codepen.io/marco_fugaro/pen/xxZWPWJ?editors=0010
vec3 fixNormal(vec3 position,vec3 distortedPosition,vec3 normal){
    vec3 tangent=orthogonal(normal);
    vec3 bitangent=normalize(cross(normal,tangent));
    float offset=.1;
    vec3 neighbour1=position+tangent*offset;
    vec3 neighbour2=position+bitangent*offset;
    vec3 displacedNeighbour1=distort(neighbour1);
    vec3 displacedNeighbour2=distort(neighbour2);
    vec3 displacedTangent=displacedNeighbour1-distortedPosition;
    vec3 displacedBitangent=displacedNeighbour2-distortedPosition;
    vec3 displacedNormal=normalize(cross(displacedTangent,displacedBitangent));
    return displacedNormal;
}

void main(){
    vec3 pos=position;
    pos=distort(pos);
    vec4 modelPosition=modelMatrix*vec4(pos,1.);
    vec4 viewPosition=viewMatrix*modelPosition;
    vec4 projectedPosition=projectionMatrix*viewPosition;
    gl_Position=projectedPosition;
    
    vec3 distortedNormal=fixNormal(position,pos,normal);
    
    vUv=uv;
    vWorldNormal=getWorldNormal(modelMatrix,distortedNormal).xyz;
}
`;
const liquidCrystalFragmentShader = `
#define GLSLIFY 1
//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

float invert(float n){
    return 1.-n;
}

vec3 invert(vec3 n){
    return 1.-n;
}

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform sampler2D uIriMap;
uniform float uIriBoost;

varying vec2 vUv;
varying vec3 vWorldNormal;

void main(){
    vec2 newUv=vUv;
    
    // pbr
    float noise=snoise(vWorldNormal*5.)*.3;
    vec3 N=normalize(vWorldNormal+vec3(noise));
    vec3 V=normalize(cameraPosition);
    float NdotV=max(dot(N,V),0.);
    float colorStrength=smoothstep(0.,.8,NdotV);
    vec3 color=invert(vec3(colorStrength));
    
    // iri
    vec3 airy=texture2D(uIriMap,vec2(NdotV*.99,0.)).rgb;
    airy*=airy;
    vec3 specularLight=vWorldNormal*airy*uIriBoost;
    
    float mixStrength=smoothstep(.3,.6,NdotV);
    vec3 finalColor=mix(specularLight,color,mixStrength);
    
    gl_FragColor=vec4(finalColor,0.);
}
`;
/**
 * @classdesc
 * ThinFilmFresnelMap is a lookup texture containing the reflection colour. The texture index value
 * is dot(normal, view). The texture values are stored in approximated gamma space (power 2.0), so
 * the sampled value needs to be multiplied with itself before use. The sampled value should replace
 * the fresnel factor in a PBR material.
 *
 * @property filmThickness The thickness of the thin film layer in nanometers. Defaults to 380.
 * @property refractiveIndexFilm The refractive index of the thin film. Defaults to 2.
 * @property refractiveIndexBase The refractive index of the material under the film. Defaults to 3.
 *
 * @constructor
 * @param filmThickness The thickness of the thin film layer in nanometers. Defaults to 380.
 * @param refractiveIndexFilm The refractive index of the thin film. Defaults to 2.
 * @param refractiveIndexBase The refractive index of the material under the film. Defaults to 3.
 * @param size The width of the texture. Defaults to 64.
 *
 * @extends DataTexture
 *
 * @author David Lenaerts <http://www.derschmale.com>
 */
function ThinFilmFresnelMap(filmThickness, refractiveIndexFilm, refractiveIndexBase, size) {
    this._filmThickness = filmThickness || 380.0;
    this._refractiveIndexFilm = refractiveIndexFilm || 2;
    this._refractiveIndexBase = refractiveIndexBase || 3;
    this._size = size || 64;
    this._data = new Uint8Array(this._size * 4);
    this._updateData();
    this.generateMipmaps = true;
    this.needsUpdate = true;
    this.texture = new THREE.DataTexture(this._data, this._size, 1);
}
ThinFilmFresnelMap.prototype = Object.create(THREE.DataTexture.prototype, {
    filmThickness: {
        get: function () {
            return this._filmThickness;
        },
        set: function (value) {
            this._filmThickness = value;
            this.updateSettings(this._filmThickness, this._refractiveIndexFilm, this._refractiveIndexBase);
        }
    },
    refractiveIndexFilm: {
        get: function () {
            return this._refractiveIndexFilm;
        },
        set: function (value) {
            this._refractiveIndexFilm = value;
            this.updateSettings(this._filmThickness, this._refractiveIndexFilm, this._refractiveIndexBase);
        }
    },
    refractiveIndexBase: {
        get: function () {
            return this._refractiveIndexBase;
        },
        set: function (value) {
            this._refractiveIndexBase = value;
            this.updateSettings(this._filmThickness, this._refractiveIndexFilm, this._refractiveIndexBase);
        }
    }
});
/**
 * Regenerates the lookup texture given new data.
 * @param filmThickness The thickness of the thin film layer in nanometers. Defaults to 380.
 * @param refractiveIndexFilm The refractive index of the thin film. Defaults to 2.
 * @param refractiveIndexBase The refractive index of the material under the film. Defaults to 3.
 */
ThinFilmFresnelMap.prototype.updateSettings = function (filmThickness, refractiveIndexFilm, refractiveIndexBase) {
    this._filmThickness = filmThickness || 380;
    this._refractiveIndexFilm = refractiveIndexFilm || 2;
    this._refractiveIndexBase = refractiveIndexBase || 3;
    this._updateData();
};
/**
 * @private
 */
ThinFilmFresnelMap.prototype._fresnelRefl = function (refractiveIndex1, refractiveIndex2, cos1, cos2, R, phi) {
    // r is amplitudinal, R is power
    let sin1Sqr = 1.0 - cos1 * cos1; // = sin^2(incident)
    let refrRatio = refractiveIndex1 / refractiveIndex2;
    if (refrRatio * refrRatio * sin1Sqr > 1.0) {
        // total internal reflection
        R.x = 1.0;
        R.y = 1.0;
        let sqrRefrRatio = refrRatio * refrRatio;
        // it looks like glsl's atan ranges are different from those in JS?
        phi.x =
            2.0 *
                Math.atan((-sqrRefrRatio * Math.sqrt(sin1Sqr - 1.0 / sqrRefrRatio)) / cos1);
        phi.y = 2.0 * Math.atan(-Math.sqrt(sin1Sqr - 1.0 / sqrRefrRatio) / cos1);
    }
    else {
        let r_p = (refractiveIndex2 * cos1 - refractiveIndex1 * cos2) /
            (refractiveIndex2 * cos1 + refractiveIndex1 * cos2);
        let r_s = (refractiveIndex1 * cos1 - refractiveIndex2 * cos2) /
            (refractiveIndex1 * cos1 + refractiveIndex2 * cos2);
        phi.x = r_p < 0.0 ? Math.PI : 0.0;
        phi.y = r_s < 0.0 ? Math.PI : 0.0;
        R.x = r_p * r_p;
        R.y = r_s * r_s;
    }
};
/**
 * @private
 */
ThinFilmFresnelMap.prototype._updateData = function () {
    let filmThickness = this._filmThickness;
    let refractiveIndexFilm = this._refractiveIndexFilm;
    let refractiveIndexBase = this._refractiveIndexBase;
    let size = this._size;
    // approximate CIE XYZ weighting functions from: http://jcgt.org/published/0002/02/01/paper.pdf
    function xFit_1931(lambda) {
        let t1 = (lambda - 442.0) * (lambda < 442.0 ? 0.0624 : 0.0374);
        let t2 = (lambda - 599.8) * (lambda < 599.8 ? 0.0264 : 0.0323);
        let t3 = (lambda - 501.1) * (lambda < 501.1 ? 0.049 : 0.0382);
        return (0.362 * Math.exp(-0.5 * t1 * t1) +
            1.056 * Math.exp(-0.5 * t2 * t2) -
            0.065 * Math.exp(-0.5 * t3 * t3));
    }
    function yFit_1931(lambda) {
        let t1 = (lambda - 568.8) * (lambda < 568.8 ? 0.0213 : 0.0247);
        let t2 = (lambda - 530.9) * (lambda < 530.9 ? 0.0613 : 0.0322);
        return 0.821 * Math.exp(-0.5 * t1 * t1) + 0.286 * Math.exp(-0.5 * t2 * t2);
    }
    function zFit_1931(lambda) {
        let t1 = (lambda - 437.0) * (lambda < 437.0 ? 0.0845 : 0.0278);
        let t2 = (lambda - 459.0) * (lambda < 459.0 ? 0.0385 : 0.0725);
        return 1.217 * Math.exp(-0.5 * t1 * t1) + 0.681 * Math.exp(-0.5 * t2 * t2);
    }
    let data = this._data;
    let phi12 = new THREE.Vector2();
    let phi21 = new THREE.Vector2();
    let phi23 = new THREE.Vector2();
    let R12 = new THREE.Vector2();
    let T12 = new THREE.Vector2();
    let R23 = new THREE.Vector2();
    let R_bi = new THREE.Vector2();
    let T_tot = new THREE.Vector2();
    let R_star = new THREE.Vector2();
    let R_bi_sqr = new THREE.Vector2();
    let R_12_star = new THREE.Vector2();
    let R_star_t_tot = new THREE.Vector2();
    let refrRatioSqr = 1.0 / (refractiveIndexFilm * refractiveIndexFilm);
    let refrRatioSqrBase = (refractiveIndexFilm * refractiveIndexFilm) /
        (refractiveIndexBase * refractiveIndexBase);
    // RGB is too limiting, so we use the entire spectral domain, but using limited samples (64) to
    // create more pleasing bands
    let numBands = 64;
    let waveLenRange = 780 - 380; // the entire visible range
    for (let i = 0; i < size; ++i) {
        let cosThetaI = i / size;
        let cosThetaT = Math.sqrt(1 - refrRatioSqr * (1.0 - cosThetaI * cosThetaI));
        let cosThetaT2 = Math.sqrt(1 - refrRatioSqrBase * (1.0 - cosThetaT * cosThetaT));
        // this is essentially the extra distance traveled by a ray if it bounds through the film
        let pathDiff = 2.0 * refractiveIndexFilm * filmThickness * cosThetaT;
        let pathDiff2PI = 2.0 * Math.PI * pathDiff;
        this._fresnelRefl(1.0, refractiveIndexFilm, cosThetaI, cosThetaT, R12, phi12);
        T12.x = 1.0 - R12.x;
        T12.y = 1.0 - R12.y;
        phi21.x = Math.PI - phi12.x;
        phi21.y = Math.PI - phi12.y;
        // this concerns the base layer
        this._fresnelRefl(refractiveIndexFilm, refractiveIndexBase, cosThetaT, cosThetaT2, R23, phi23);
        R_bi.x = Math.sqrt(R23.x * R12.x);
        R_bi.y = Math.sqrt(R23.y * R12.y);
        T_tot.x = Math.sqrt(T12.x * T12.x);
        T_tot.y = Math.sqrt(T12.y * T12.y);
        R_star.x = (T12.x * T12.x * R23.x) / (1.0 - R23.x * R12.x);
        R_star.y = (T12.y * T12.y * R23.y) / (1.0 - R23.y * R12.y);
        R_bi_sqr.x = R_bi.x * R_bi.x;
        R_bi_sqr.y = R_bi.y * R_bi.y;
        R_12_star.x = R12.x + R_star.x;
        R_12_star.y = R12.y + R_star.y;
        R_star_t_tot.x = R_star.x - T_tot.x;
        R_star_t_tot.y = R_star.y - T_tot.y;
        let x = 0, y = 0, z = 0;
        let totX = 0, totY = 0, totZ = 0;
        // TODO: we could also put the thickness in the look-up table, make it a 2D table
        for (let j = 0; j < numBands; ++j) {
            let waveLen = 380 + (j / (numBands - 1)) * waveLenRange;
            let deltaPhase = pathDiff2PI / waveLen;
            let cosPhiX = Math.cos(deltaPhase + phi23.x + phi21.x);
            let cosPhiY = Math.cos(deltaPhase + phi23.y + phi21.y);
            let valX = R_12_star.x +
                ((2.0 * (R_bi.x * cosPhiX - R_bi_sqr.x)) /
                    (1.0 - 2 * R_bi.x * cosPhiX + R_bi_sqr.x)) *
                    R_star_t_tot.x;
            let valY = R_12_star.y +
                ((2.0 * (R_bi.y * cosPhiY - R_bi_sqr.y)) /
                    (1.0 - 2 * R_bi.y * cosPhiY + R_bi_sqr.y)) *
                    R_star_t_tot.y;
            let v = 0.5 * (valX + valY);
            let wx = xFit_1931(waveLen);
            let wy = yFit_1931(waveLen);
            let wz = zFit_1931(waveLen);
            totX += wx;
            totY += wy;
            totZ += wz;
            x += wx * v;
            y += wy * v;
            z += wz * v;
        }
        x /= totX;
        y /= totY;
        z /= totZ;
        let r = 3.2406 * x - 1.5372 * y - 0.4986 * z;
        let g = -0.9689 * x + 1.8758 * y + 0.0415 * z;
        let b = 0.0557 * x - 0.204 * y + 1.057 * z;
        r = THREE.MathUtils.clamp(r, 0.0, 1.0);
        g = THREE.MathUtils.clamp(g, 0.0, 1.0);
        b = THREE.MathUtils.clamp(b, 0.0, 1.0);
        // linear to gamma
        r = Math.sqrt(r);
        g = Math.sqrt(g);
        b = Math.sqrt(b);
        // CIE XYZ to linear rgb conversion matrix:
        // 3.2406 -1.5372 -0.4986
        // -0.9689  1.8758  0.0415
        // 0.0557 -0.2040  1.0570
        let k = i << 2;
        data[k] = Math.floor(r * 0xff);
        data[k + 1] = Math.floor(g * 0xff);
        data[k + 2] = Math.floor(b * 0xff);
        data[k + 3] = 0xff;
    }
    this.needsUpdate = true;
};
class Base {
    constructor(sel, debug = false) {
        this.debug = debug;
        this.container = document.querySelector(sel);
        this.perspectiveCameraParams = {
            fov: 75,
            near: 0.1,
            far: 100
        };
        this.orthographicCameraParams = {
            zoom: 2,
            near: -100,
            far: 1000
        };
        this.cameraPosition = new THREE.Vector3(0, 3, 10);
        this.lookAtPosition = new THREE.Vector3(0, 0, 0);
        this.rendererParams = {
            outputEncoding: THREE.LinearEncoding,
            config: {
                alpha: true,
                antialias: true
            }
        };
        this.mousePos = new THREE.Vector2(0, 0);
        this.mouseSpeed = 0;
    }
    // 初始化
    init() {
        this.createScene();
        this.createPerspectiveCamera();
        this.createRenderer();
        this.createMesh({});
        this.createLight();
        this.createOrbitControls();
        this.addListeners();
        this.setLoop();
    }
    // 创建场景
    createScene() {
        const scene = new THREE.Scene();
        if (this.debug) {
            scene.add(new THREE.AxesHelper());
            const stats = Stats();
            this.container.appendChild(stats.dom);
            this.stats = stats;
        }
        this.scene = scene;
    }
    // 创建透视相机
    createPerspectiveCamera() {
        const { perspectiveCameraParams, cameraPosition, lookAtPosition } = this;
        const { fov, near, far } = perspectiveCameraParams;
        const aspect = calcAspect(this.container);
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.copy(cameraPosition);
        camera.lookAt(lookAtPosition);
        this.camera = camera;
    }
    // 创建正交相机
    createOrthographicCamera() {
        const { orthographicCameraParams, cameraPosition, lookAtPosition } = this;
        const { left, right, top, bottom, near, far } = orthographicCameraParams;
        const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
        camera.position.copy(cameraPosition);
        camera.lookAt(lookAtPosition);
        this.camera = camera;
    }
    // 更新正交相机参数
    updateOrthographicCameraParams() {
        const { container } = this;
        const { zoom, near, far } = this.orthographicCameraParams;
        const aspect = calcAspect(container);
        this.orthographicCameraParams = {
            left: -zoom * aspect,
            right: zoom * aspect,
            top: zoom,
            bottom: -zoom,
            near,
            far,
            zoom
        };
    }
    // 创建渲染
    createRenderer(useWebGL1 = false) {
        var _a;
        const { rendererParams } = this;
        const { outputEncoding, config } = rendererParams;
        const renderer = !useWebGL1
            ? new THREE.WebGLRenderer(config)
            : new THREE.WebGL1Renderer(config);
        renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        renderer.outputEncoding = outputEncoding;
        this.resizeRendererToDisplaySize();
        (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(renderer.domElement);
        this.renderer = renderer;
        this.renderer.setClearColor(0x000000, 0);
    }
    // 允许投影
    enableShadow() {
        this.renderer.shadowMap.enabled = true;
    }
    // 调整渲染器尺寸
    resizeRendererToDisplaySize() {
        const { renderer } = this;
        if (!renderer) {
            return;
        }
        const canvas = renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const { clientWidth, clientHeight } = canvas;
        const width = (clientWidth * pixelRatio) | 0;
        const height = (clientHeight * pixelRatio) | 0;
        const isResizeNeeded = canvas.width !== width || canvas.height !== height;
        if (isResizeNeeded) {
            renderer.setSize(width, height, false);
        }
        return isResizeNeeded;
    }
    // 创建网格
    createMesh(meshObject, container = this.scene) {
        const { geometry = new THREE.BoxGeometry(1, 1, 1), material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#d9dfc8")
        }), position = new THREE.Vector3(0, 0, 0) } = meshObject;
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(position);
        container.add(mesh);
        return mesh;
    }
    // 创建光源
    createLight() {
        const dirLight = new THREE.DirectionalLight(new THREE.Color("#ffffff"), 0.5);
        dirLight.position.set(0, 50, 0);
        this.scene.add(dirLight);
        const ambiLight = new THREE.AmbientLight(new THREE.Color("#ffffff"), 0.4);
        this.scene.add(ambiLight);
    }
    // 创建轨道控制
    createOrbitControls() {
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        const { lookAtPosition } = this;
        controls.target.copy(lookAtPosition);
        controls.update();
        this.controls = controls;
    }
    // 监听事件
    addListeners() {
        this.onResize();
    }
    // 监听画面缩放
    onResize() {
        window.addEventListener("resize", (e) => {
            if (this.shaderMaterial) {
                this.shaderMaterial.uniforms.uResolution.value.x = window.innerWidth;
                this.shaderMaterial.uniforms.uResolution.value.y = window.innerHeight;
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            }
            else {
                if (this.camera instanceof THREE.PerspectiveCamera) {
                    const aspect = calcAspect(this.container);
                    const camera = this.camera;
                    camera.aspect = aspect;
                    camera.updateProjectionMatrix();
                }
                else if (this.camera instanceof THREE.OrthographicCamera) {
                    this.updateOrthographicCameraParams();
                    const camera = this.camera;
                    const { left, right, top, bottom, near, far } = this.orthographicCameraParams;
                    camera.left = left;
                    camera.right = right;
                    camera.top = top;
                    camera.bottom = bottom;
                    camera.near = near;
                    camera.far = far;
                    camera.updateProjectionMatrix();
                }
                this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
            }
        });
    }
    // 动画
    update() {
        console.log("animation");
    }
    // 渲染
    setLoop() {
        this.renderer.setAnimationLoop(() => {
            this.resizeRendererToDisplaySize();
            this.update();
            if (this.controls) {
                this.controls.update();
            }
            if (this.stats) {
                this.stats.update();
            }
            if (this.composer) {
                this.composer.render();
            }
            else {
                this.renderer.render(this.scene, this.camera);
            }
        });
    }
    // 创建文本
    createText(text = "", config, material = new THREE.MeshStandardMaterial({
        color: "#ffffff"
    })) {
        const geo = new THREE.TextGeometry(text, config);
        const mesh = new THREE.Mesh(geo, material);
        return mesh;
    }
    // 创建音效源
    createAudioSource() {
        const listener = new THREE.AudioListener();
        this.camera.add(listener);
        const sound = new THREE.Audio(listener);
        this.sound = sound;
    }
    // 加载音效
    loadAudio(url) {
        const loader = new THREE.AudioLoader();
        return new Promise((resolve) => {
            loader.load(url, (buffer) => {
                this.sound.setBuffer(buffer);
                resolve(buffer);
            });
        });
    }
    // 加载模型
    loadModel(url) {
        const loader = new GLTFLoader();
        return new Promise((resolve, reject) => {
            loader.load(url, (gltf) => {
                const model = gltf.scene;
                console.log(model);
                resolve(model);
            }, undefined, (err) => {
                console.log(err);
                reject();
            });
        });
    }
    // 加载FBX模型
    loadFBXModel(url) {
        const loader = new FBXLoader();
        return new Promise((resolve, reject) => {
            loader.load(url, (obj) => {
                resolve(obj);
            }, undefined, (err) => {
                console.log(err);
                reject();
            });
        });
    }
    // 加载字体
    loadFont(url) {
        const loader = new THREE.FontLoader();
        return new Promise((resolve) => {
            loader.load(url, (font) => {
                resolve(font);
            });
        });
    }
    // 创建点选模型
    createRaycaster() {
        this.raycaster = new THREE.Raycaster();
        this.trackMousePos();
    }
    // 追踪鼠标位置
    trackMousePos() {
        window.addEventListener("mousemove", (e) => {
            this.setMousePos(e);
        });
        window.addEventListener("touchstart", (e) => {
            this.setMousePos(e.touches[0]);
        }, { passive: false });
        window.addEventListener("touchmove", (e) => {
            this.setMousePos(e.touches[0]);
        });
    }
    // 设置鼠标位置
    setMousePos(e) {
        const { x, y } = getNormalizedMousePos(e);
        this.mousePos.x = x;
        this.mousePos.y = y;
    }
    // 获取点击物
    getInterSects(container = this.scene) {
        this.raycaster.setFromCamera(this.mousePos, this.camera);
        const intersects = this.raycaster.intersectObjects(container.children, true);
        return intersects;
    }
    // 选中点击物时
    onChooseIntersect(target, container = this.scene) {
        const intersects = this.getInterSects(container);
        const intersect = intersects[0];
        if (!intersect || !intersect.face) {
            return null;
        }
        const { object } = intersect;
        return target === object ? intersect : null;
    }
    // 获取跟屏幕同像素的fov角度
    getScreenFov() {
        return ky.rad2deg(2 * Math.atan(window.innerHeight / 2 / this.cameraPosition.z));
    }
    // 获取重心坐标系
    getBaryCoord(bufferGeometry) {
        // https://gist.github.com/mattdesl/e399418558b2b52b58f5edeafea3c16c
        const length = bufferGeometry.attributes.position.array.length;
        const count = length / 3;
        const bary = [];
        for (let i = 0; i < count; i++) {
            bary.push(0, 0, 1, 0, 1, 0, 1, 0, 0);
        }
        const aCenter = new Float32Array(bary);
        bufferGeometry.setAttribute("aCenter", new THREE.BufferAttribute(aCenter, 3));
    }
    // 追踪鼠标速度
    trackMouseSpeed() {
        // https://stackoverflow.com/questions/6417036/track-mouse-speed-with-js
        let lastMouseX = -1;
        let lastMouseY = -1;
        let mouseSpeed = 0;
        window.addEventListener("mousemove", (e) => {
            const mousex = e.pageX;
            const mousey = e.pageY;
            if (lastMouseX > -1) {
                mouseSpeed = Math.max(Math.abs(mousex - lastMouseX), Math.abs(mousey - lastMouseY));
                this.mouseSpeed = mouseSpeed / 100;
            }
            lastMouseX = mousex;
            lastMouseY = mousey;
        });
        document.addEventListener("mouseleave", () => {
            this.mouseSpeed = 0;
        });
    }
    // 使用PCFSoft阴影
    usePCFSoftShadowMap() {
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    // 使用VSM阴影
    useVSMShadowMap() {
        this.renderer.shadowMap.type = THREE.VSMShadowMap;
    }
    // 将相机的方向设为z轴
    setCameraUpZ() {
        this.camera.up.set(0, 0, 1);
    }
}
class LiquidCrystal extends Base {
    constructor(sel, debug) {
        super(sel, debug);
        this.clock = new THREE.Clock();
        this.cameraPosition = new THREE.Vector3(0, 0, 25);
        this.params = {
            timeScale: 0.1,
            iriBoost: 8
        };
    }
    // 初始化
    init() {
        this.createScene();
        this.createPerspectiveCamera();
        this.createRenderer();
        this.createLiquidCrystalMaterial();
        this.createSphere();
        this.trackMousePos();
        this.createOrbitControls();
        this.addListeners();
        this.setLoop();
    }
    // 创建液晶材质
    createLiquidCrystalMaterial() {
        const liquidCrystalMaterial = new THREE.ShaderMaterial({
            vertexShader: liquidCrystalVertexShader,
            fragmentShader: liquidCrystalFragmentShader,
            side: THREE.DoubleSide,
            uniforms: {
                uTime: {
                    value: 0
                },
                uResolution: {
                    value: new THREE.Vector2(window.innerWidth, window.innerHeight)
                },
                uMouse: {
                    value: new THREE.Vector2(0, 0)
                },
                // https://tympanus.net/codrops/2020/09/30/creating-mirrors-in-react-three-fiber-and-three-js/
                uIriMap: {
                    value: new ThinFilmFresnelMap(1000, 1.2, 3.2, 64).texture
                },
                uIriBoost: {
                    value: this.params.iriBoost
                }
            }
        });
        this.liquidCrystalMaterial = liquidCrystalMaterial;
    }
    // 创建球体
    createSphere() {
        const geometry = new THREE.SphereBufferGeometry(10, 64, 64);
        const material = this.liquidCrystalMaterial;
        this.createMesh({
            geometry,
            material
        });
    }
    // 动画
    update() {
        const elapsedTime = this.clock.getElapsedTime();
        const time = elapsedTime * this.params.timeScale;
        const mousePos = this.mousePos;
        if (this.liquidCrystalMaterial) {
            this.liquidCrystalMaterial.uniforms.uTime.value = time;
            this.liquidCrystalMaterial.uniforms.uMouse.value = mousePos;
        }
    }
}
const start = () => {
    const liquidCrystal = new LiquidCrystal(".liquid-crystal", false);
    liquidCrystal.init();
};
start();