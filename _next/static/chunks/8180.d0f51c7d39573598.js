"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8153,8180],{8153:(e,n,a)=>{a.r(n),a.d(n,{default:()=>i});var t=a(1764);let o=Object.freeze({displayName:"GLSL",fileTypes:["vs","fs","gs","vsh","fsh","gsh","vshader","fshader","gshader","vert","frag","geom","f.glsl","v.glsl","g.glsl"],foldingStartMarker:"/\\*\\*|\\{\\s*$",foldingStopMarker:"\\*\\*/|^\\s*\\}",name:"glsl",patterns:[{match:"\\b(break|case|continue|default|discard|do|else|for|if|return|switch|while)\\b",name:"keyword.control.glsl"},{match:"\\b(void|bool|int|uint|float|vec2|vec3|vec4|bvec2|bvec3|bvec4|ivec2|ivec2|ivec3|uvec2|uvec2|uvec3|mat2|mat3|mat4|mat2x2|mat2x3|mat2x4|mat3x2|mat3x3|mat3x4|mat4x2|mat4x3|mat4x4|sampler[1|2|3]D|samplerCube|sampler2DRect|sampler[1|2]DShadow|sampler2DRectShadow|sampler[1|2]DArray|sampler[1|2]DArrayShadow|samplerBuffer|sampler2DMS|sampler2DMSArray|struct|isampler[1|2|3]D|isamplerCube|isampler2DRect|isampler[1|2]DArray|isamplerBuffer|isampler2DMS|isampler2DMSArray|usampler[1|2|3]D|usamplerCube|usampler2DRect|usampler[1|2]DArray|usamplerBuffer|usampler2DMS|usampler2DMSArray)\\b",name:"storage.type.glsl"},{match:"\\b(attribute|centroid|const|flat|in|inout|invariant|noperspective|out|smooth|uniform|varying)\\b",name:"storage.modifier.glsl"},{match:"\\b(gl_BackColor|gl_BackLightModelProduct|gl_BackLightProduct|gl_BackMaterial|gl_BackSecondaryColor|gl_ClipDistance|gl_ClipPlane|gl_ClipVertex|gl_Color|gl_DepthRange|gl_DepthRangeParameters|gl_EyePlaneQ|gl_EyePlaneR|gl_EyePlaneS|gl_EyePlaneT|gl_Fog|gl_FogCoord|gl_FogFragCoord|gl_FogParameters|gl_FragColor|gl_FragCoord|gl_FragDat|gl_FragDept|gl_FrontColor|gl_FrontFacing|gl_FrontLightModelProduct|gl_FrontLightProduct|gl_FrontMaterial|gl_FrontSecondaryColor|gl_InstanceID|gl_Layer|gl_LightModel|gl_LightModelParameters|gl_LightModelProducts|gl_LightProducts|gl_LightSource|gl_LightSourceParameters|gl_MaterialParameters|gl_ModelViewMatrix|gl_ModelViewMatrixInverse|gl_ModelViewMatrixInverseTranspose|gl_ModelViewMatrixTranspose|gl_ModelViewProjectionMatrix|gl_ModelViewProjectionMatrixInverse|gl_ModelViewProjectionMatrixInverseTranspose|gl_ModelViewProjectionMatrixTranspose|gl_MultiTexCoord[0-7]|gl_Normal|gl_NormalMatrix|gl_NormalScale|gl_ObjectPlaneQ|gl_ObjectPlaneR|gl_ObjectPlaneS|gl_ObjectPlaneT|gl_Point|gl_PointCoord|gl_PointParameters|gl_PointSize|gl_Position|gl_PrimitiveIDIn|gl_ProjectionMatrix|gl_ProjectionMatrixInverse|gl_ProjectionMatrixInverseTranspose|gl_ProjectionMatrixTranspose|gl_SecondaryColor|gl_TexCoord|gl_TextureEnvColor|gl_TextureMatrix|gl_TextureMatrixInverse|gl_TextureMatrixInverseTranspose|gl_TextureMatrixTranspose|gl_Vertex|gl_VertexIDh)\\b",name:"support.variable.glsl"},{match:"\\b(gl_MaxClipPlanes|gl_MaxCombinedTextureImageUnits|gl_MaxDrawBuffers|gl_MaxFragmentUniformComponents|gl_MaxLights|gl_MaxTextureCoords|gl_MaxTextureImageUnits|gl_MaxTextureUnits|gl_MaxVaryingFloats|gl_MaxVertexAttribs|gl_MaxVertexTextureImageUnits|gl_MaxVertexUniformComponents)\\b",name:"support.constant.glsl"},{match:"\\b(abs|acos|all|any|asin|atan|ceil|clamp|cos|cross|degrees|dFdx|dFdy|distance|dot|equal|exp|exp2|faceforward|floor|fract|ftransform|fwidth|greaterThan|greaterThanEqual|inversesqrt|length|lessThan|lessThanEqual|log|log2|matrixCompMult|max|min|mix|mod|noise[1-4]|normalize|not|notEqual|outerProduct|pow|radians|reflect|refract|shadow1D|shadow1DLod|shadow1DProj|shadow1DProjLod|shadow2D|shadow2DLod|shadow2DProj|shadow2DProjLod|sign|sin|smoothstep|sqrt|step|tan|texture1D|texture1DLod|texture1DProj|texture1DProjLod|texture2D|texture2DLod|texture2DProj|texture2DProjLod|texture3D|texture3DLod|texture3DProj|texture3DProjLod|textureCube|textureCubeLod|transpose)\\b",name:"support.function.glsl"},{match:"\\b(asm|double|enum|extern|goto|inline|long|short|sizeof|static|typedef|union|unsigned|volatile)\\b",name:"invalid.illegal.glsl"},{include:"source.c"}],scopeName:"source.glsl",embeddedLangs:["c"]});var i=[...t.default,o]},3692:(e,n,a)=>{a.r(n),a.d(n,{default:()=>u});var t=a(9012),o=a(3636),i=a(4132),r=a(6418),l=a(9495);let p=Object.freeze({displayName:"Julia",name:"julia",patterns:[{include:"#operator"},{include:"#array"},{include:"#string"},{include:"#parentheses"},{include:"#bracket"},{include:"#function_decl"},{include:"#function_call"},{include:"#for_block"},{include:"#keyword"},{include:"#number"},{include:"#comment"},{include:"#type_decl"},{include:"#symbol"}],repository:{array:{patterns:[{begin:"\\[",beginCaptures:{0:{name:"meta.bracket.julia"}},end:"(\\])((?:\\.)?'*)",endCaptures:{1:{name:"meta.bracket.julia"},2:{name:"keyword.operator.transpose.julia"}},name:"meta.array.julia",patterns:[{match:"\\bbegin\\b",name:"constant.numeric.julia"},{match:"\\bend\\b",name:"constant.numeric.julia"},{include:"#self_no_for_block"}]}]},bracket:{patterns:[{begin:"\\{",beginCaptures:{0:{name:"meta.bracket.julia"}},end:"(\\})((?:\\.)?'*)",endCaptures:{1:{name:"meta.bracket.julia"},2:{name:"keyword.operator.transpose.julia"}},patterns:[{include:"#self_no_for_block"}]}]},comment:{patterns:[{include:"#comment_block"},{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.julia"}},end:"\\n",name:"comment.line.number-sign.julia",patterns:[{include:"#comment_tags"}]}]},comment_block:{patterns:[{begin:"#=",beginCaptures:{0:{name:"punctuation.definition.comment.begin.julia"}},end:"=#",endCaptures:{0:{name:"punctuation.definition.comment.end.julia"}},name:"comment.block.number-sign-equals.julia",patterns:[{include:"#comment_tags"},{include:"#comment_block"}]}]},comment_tags:{patterns:[{match:"\\bTODO\\b",name:"keyword.other.comment-annotation.julia"},{match:"\\bFIXME\\b",name:"keyword.other.comment-annotation.julia"},{match:"\\bCHANGED\\b",name:"keyword.other.comment-annotation.julia"},{match:"\\bXXX\\b",name:"keyword.other.comment-annotation.julia"}]},for_block:{comment:"for blocks need to be special-cased to support tokenizing 'outer' properly",patterns:[{begin:"\\b(for)\\b",beginCaptures:{0:{name:"keyword.control.julia"}},end:"(?<!,|\\s)(\\s*\\n)",patterns:[{match:"\\bouter\\b",name:"keyword.other.julia"},{include:"$self"}]}]},function_call:{patterns:[{begin:"((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?\\.?(\\()",beginCaptures:{1:{name:"support.function.julia"},2:{name:"support.type.julia"},3:{name:"meta.bracket.julia"}},end:"\\)(('|(\\.'))*\\.?')?",endCaptures:{0:{name:"meta.bracket.julia"},1:{name:"keyword.operator.transposed-func.julia"}},patterns:[{include:"#self_no_for_block"}]}]},function_decl:{patterns:[{captures:{1:{name:"entity.name.function.julia"},2:{name:"support.type.julia"}},comment:"first group is function name\nSecond group is type parameters (e.g. {T<:Number, S})\nThen open parens\nThen a lookahead ensures that we are followed by:\n  - anything (function arguments)\n  - 0 or more spaces\n  - Finally an equal sign\nNegative lookahead ensures we don't have another equal sign (not `==`)",match:"((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?(?=\\([^#]*\\)(::[^\\s]+)?(\\s*\\bwhere\\b\\s+.+?)?\\s*?=(?![=>]))"},{captures:{1:{name:"keyword.other.julia"},2:{name:"keyword.operator.dots.julia"},3:{name:"entity.name.function.julia"},4:{name:"support.type.julia"}},comment:"similar regex to previous, but with keyword not 1-line syntax",match:"\\b(function|macro)(?:\\s+(?:(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*(\\.))?((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?|\\s*)(?=\\()"}]},keyword:{patterns:[{match:"\\b(?<![:_\\.])(?:function|mutable\\s+struct|struct|macro|quote|abstract\\s+type|primitive\\s+type|module|baremodule|where)\\b",name:"keyword.other.julia"},{match:"\\b(?<![:_])(?:if|else|elseif|for|while|begin|let|do|try|catch|finally|return|break|continue)\\b",name:"keyword.control.julia"},{match:"\\b(?<![:_])end\\b",name:"keyword.control.end.julia"},{match:"\\b(?<![:_])(?:global|local|const)\\b",name:"keyword.storage.modifier.julia"},{match:"\\b(?<![:_])(?:export)\\b",name:"keyword.control.export.julia"},{match:"\\b(?<![:_])(?:import)\\b",name:"keyword.control.import.julia"},{match:"\\b(?<![:_])(?:using)\\b",name:"keyword.control.using.julia"},{match:"(?<=\\w\\s)\\b(as)\\b(?=\\s\\w)",name:"keyword.control.as.julia"},{match:"(@(\\.|(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*))",name:"support.function.macro.julia"}]},number:{patterns:[{captures:{1:{name:"constant.numeric.julia"},2:{name:"keyword.operator.conjugate-number.julia"}},match:"((?<!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿]))(?:(?:\\b0(?:x|X)[0-9a-fA-F](?:_?[0-9a-fA-F])*)|(?:\\b0o[0-7](?:_?[0-7])*)|(?:\\b0b[0-1](?:_?[0-1])*)|(?:(?:\\b[0-9](?:_?[0-9])*\\.?(?!\\.)(?:[_0-9]*))|(?:\\b\\.[0-9](?:_?[0-9])*))(?:[efE][+-]?[0-9](?:_?[0-9])*)?(?:im\\b|Inf(?:16|32|64)?\\b|NaN(?:16|32|64)?\\b|π\\b|pi\\b|ℯ\\b)?|\\b[0-9]+|\\bInf(?:16|32|64)?\\b|\\bNaN(?:16|32|64)?\\b|\\bπ\\b|\\bpi\\b|\\bℯ\\b))('*)"},{match:"\\bARGS\\b|\\bC_NULL\\b|\\bDEPOT_PATH\\b|\\bENDIAN_BOM\\b|\\bENV\\b|\\bLOAD_PATH\\b|\\bPROGRAM_FILE\\b|\\bstdin\\b|\\bstdout\\b|\\bstderr\\b|\\bVERSION\\b|\\bdevnull\\b",name:"constant.global.julia"},{match:"\\btrue\\b|\\bfalse\\b|\\bnothing\\b|\\bmissing\\b",name:"constant.language.julia"}]},operator:{patterns:[{match:"(?:->|<-|-->|=>)",name:"keyword.operator.arrow.julia"},{match:"(?::=|\\+=|-=|\\*=|//=|/=|\\.//=|\\./=|\\.\\*=|\\\\=|\\.\\\\=|\\^=|\\.\\^=|%=|\\.%=|\xf7=|\\.\xf7=|\\|=|&=|\\.&=|⊻=|\\.⊻=|\\$=|<<=|>>=|>>>=|=(?!=))",name:"keyword.operator.update.julia"},{match:"(?:<<|>>>|>>|\\.>>>|\\.>>|\\.<<)",name:"keyword.operator.shift.julia"},{captures:{1:{name:"keyword.operator.relation.types.julia"},2:{name:"support.type.julia"},3:{name:"keyword.operator.transpose.julia"}},match:`(?:\\s*(::|>:|<:)\\s*((?:(?:Union)?\\([^)]*\\)|[[:alpha:]_$\u2207][[:word:]\u207A-\u209C!\u2032\\.]*(?:(?:{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})|(?:".+?(?<!\\\\)"))?)))(?:\\.\\.\\.)?((?:\\.)?'*)`},{match:"(?:===|∈|\\.∈|∉|\\.∉|∋|\\.∋|∌|\\.∌|≈|\\.≈|≉|\\.≉|≠|\\.≠|≡|\\.≡|≢|\\.≢|⊆|\\.⊆|⊇|\\.⊇|⊈|\\.⊈|⊉|\\.⊉|⊊|\\.⊊|⊋|\\.⊋|\\.==|!==|!=|\\.>=|\\.>|\\.<=|\\.<|\\.≤|\\.≥|==|\\.!=|\\.=|\\.!|<:|>:|:>|(?<!>)>=|(?<!<)<=|>|<|≥|≤)",name:"keyword.operator.relation.julia"},{match:"(?<=\\s)(?:\\?)(?=\\s)",name:"keyword.operator.ternary.julia"},{match:"(?<=\\s)(?:\\:)(?=\\s)",name:"keyword.operator.ternary.julia"},{match:"(?:\\|\\||&&|(?<!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿]))!)",name:"keyword.operator.boolean.julia"},{match:"(?<=[[:word:]⁺-ₜ!′∇\\)\\]\\}])(?::)",name:"keyword.operator.range.julia"},{match:"(?:\\|>)",name:"keyword.operator.applies.julia"},{match:"(?:\\||\\.\\||\\&|\\.\\&|~|\\.~|⊻|\\.⊻)",name:"keyword.operator.bitwise.julia"},{match:"(?:\\+\\+|--|\\+|\\.\\+|-|\\.\\-|\\*|\\.\\*|//(?!=)|\\.//(?!=)|/|\\./|%|\\.%|\\\\|\\.\\\\|\\^|\\.\\^|\xf7|\\.\xf7|⋅|\\.⋅|∩|\\.∩|∪|\\.∪|\xd7|√|∛)",name:"keyword.operator.arithmetic.julia"},{match:"(?:∘)",name:"keyword.operator.compose.julia"},{match:"(?:::|(?<=\\s)isa(?=\\s))",name:"keyword.operator.isa.julia"},{match:"(?:(?<=\\s)in(?=\\s))",name:"keyword.operator.relation.in.julia"},{match:"(?:\\.(?=(?:@|_|\\p{L}))|\\.\\.+)",name:"keyword.operator.dots.julia"},{match:"(?:\\$)(?=.+)",name:"keyword.operator.interpolation.julia"},{captures:{2:{name:"keyword.operator.transposed-variable.julia"}},match:"((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)(('|(\\.'))*\\.?')"},{captures:{1:{name:"bracket.end.julia"},2:{name:"keyword.operator.transposed-matrix.julia"}},match:"(\\])((?:'|(?:\\.'))*\\.?')"},{captures:{1:{name:"bracket.end.julia"},2:{name:"keyword.operator.transposed-parens.julia"}},match:"(\\))((?:'|(?:\\.'))*\\.?')"}]},parentheses:{patterns:[{begin:"\\(",beginCaptures:{0:{name:"meta.bracket.julia"}},end:"(\\))((?:\\.)?'*)",endCaptures:{1:{name:"meta.bracket.julia"},2:{name:"keyword.operator.transpose.julia"}},patterns:[{include:"#self_no_for_block"}]}]},self_no_for_block:{comment:"Same as $self, but does not contain #for_block. 'outer' is not valid in some contexts (e.g. generators, comprehensions, indexing), so use this when matching those in begin/end patterns. Keep this up-to-date with $self!",patterns:[{include:"#operator"},{include:"#array"},{include:"#string"},{include:"#parentheses"},{include:"#bracket"},{include:"#function_decl"},{include:"#function_call"},{include:"#keyword"},{include:"#number"},{include:"#comment"},{include:"#type_decl"},{include:"#symbol"}]},string:{patterns:[{begin:'(?:(@doc)\\s((?:doc)?""")|(doc"""))',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},end:'(""") ?(->)?',endCaptures:{1:{name:"punctuation.definition.string.end.julia"},2:{name:"keyword.operator.arrow.julia"}},name:"string.docstring.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]},{begin:'(i?cxx)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},contentName:"meta.embedded.inline.cpp",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"embed.cxx.julia",patterns:[{include:"source.cpp#root_context"},{include:"#string_dollar_sign_interpolate"}]},{begin:'(py)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},contentName:"meta.embedded.inline.python",end:'([\\s\\w]*)(""")',endCaptures:{2:{name:"punctuation.definition.string.end.julia"}},name:"embed.python.julia",patterns:[{include:"source.python"},{include:"#string_dollar_sign_interpolate"}]},{begin:'(js)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},contentName:"meta.embedded.inline.javascript",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"embed.js.julia",patterns:[{include:"source.js"},{include:"#string_dollar_sign_interpolate"}]},{begin:'(R)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},contentName:"meta.embedded.inline.r",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"embed.R.julia",patterns:[{include:"source.r"},{include:"#string_dollar_sign_interpolate"}]},{begin:'(raw)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"string.quoted.other.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'(raw)(")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"string.quoted.other.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'(sql)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},contentName:"meta.embedded.inline.sql",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"embed.sql.julia",patterns:[{include:"source.sql"},{include:"#string_dollar_sign_interpolate"}]},{begin:'var"""',end:'"""',name:"constant.other.symbol.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'var"',end:'"',name:"constant.other.symbol.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'^\\s?(doc)?(""")\\s?$',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},comment:"This only matches docstrings that start and end with triple quotes on\ntheir own line in the void",end:'(""")',endCaptures:{1:{name:"punctuation.definition.string.end.julia"}},name:"string.docstring.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"}},end:"'(?!')",endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"string.quoted.single.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'"""',beginCaptures:{0:{name:"punctuation.definition.string.multiline.begin.julia"}},comment:"multi-line string with triple double quotes",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.multiline.end.julia"}},name:"string.quoted.triple.double.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]},{begin:'"(?!"")',beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"}},comment:"String with single pair of double quotes. Regex matches isolated double quote",end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"string.quoted.double.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]},{begin:'r"""',beginCaptures:{0:{name:"punctuation.definition.string.regexp.begin.julia"}},end:'(""")([imsx]{0,4})?',endCaptures:{1:{name:"punctuation.definition.string.regexp.end.julia"},2:{comment:"I took this scope name from python regex grammar",name:"keyword.other.option-toggle.regexp.julia"}},name:"string.regexp.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'r"',beginCaptures:{0:{name:"punctuation.definition.string.regexp.begin.julia"}},end:'(")([imsx]{0,4})?',endCaptures:{1:{name:"punctuation.definition.string.regexp.end.julia"},2:{comment:"I took this scope name from python regex grammar",name:"keyword.other.option-toggle.regexp.julia"}},name:"string.regexp.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'(?<!")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"},1:{name:"support.function.macro.julia"}},end:'(""")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)?',endCaptures:{1:{name:"punctuation.definition.string.end.julia"},2:{name:"support.function.macro.julia"}},name:"string.quoted.other.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'(?<!")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)"',beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"},1:{name:"support.function.macro.julia"}},end:'(?<![^\\\\]\\\\)(")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)?',endCaptures:{1:{name:"punctuation.definition.string.end.julia"},2:{name:"support.function.macro.julia"}},name:"string.quoted.other.julia",patterns:[{include:"#string_escaped_char"}]},{begin:"(?<!`)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)?```",beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"},1:{name:"support.function.macro.julia"}},end:"(```)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)?",endCaptures:{1:{name:"punctuation.definition.string.end.julia"},2:{name:"support.function.macro.julia"}},name:"string.interpolated.backtick.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]},{begin:"(?<!`)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)?`",beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"},1:{name:"support.function.macro.julia"}},end:"(?<![^\\\\]\\\\)(`)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)?",endCaptures:{1:{name:"punctuation.definition.string.end.julia"},2:{name:"support.function.macro.julia"}},name:"string.interpolated.backtick.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]}]},string_dollar_sign_interpolate:{patterns:[{match:"\\$(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿]|[^\\p{^Sc}$])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿]|[^\\p{^Sc}$])*",name:"variable.interpolation.julia"},{begin:"\\$(\\()",beginCaptures:{1:{name:"meta.bracket.julia"}},comment:"`punctuation.section.embedded`, `constant.escape`,\n& `meta.embedded.line` were considered but appear to have even spottier\nsupport among popular syntaxes.",end:"\\)",endCaptures:{0:{name:"meta.bracket.julia"}},name:"variable.interpolation.julia",patterns:[{include:"#self_no_for_block"}]}]},string_escaped_char:{patterns:[{match:"\\\\(\\\\|[0-3]\\d{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8}|.)",name:"constant.character.escape.julia"}]},symbol:{patterns:[{comment:"This is string.quoted.symbol.julia in tpoisot's package",match:'(?<![[:word:]⁺-ₜ!′∇\\)\\]\\}]):(?:(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)(?!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿]))(?!["`])',name:"constant.other.symbol.julia"}]},type_decl:{patterns:[{captures:{1:{name:"entity.name.type.julia"},2:{name:"entity.other.inherited-class.julia"},3:{name:"punctuation.separator.inheritance.julia"}},match:"(?>!:_)(?:struct|mutable\\s+struct|abstract\\s+type|primitive\\s+type)\\s+((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*)(\\s*(<:)\\s*(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜\uD835\uDEC1\uD835\uDEDB\uD835\uDEFB\uD835\uDF15\uD835\uDF35\uD835\uDF4F\uD835\uDF6F\uD835\uDF89\uD835\uDFA9\uD835\uDFC3ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜\uD835\uDFCE-\uD835\uDFE1]|[^\\P{Mn}\x01-\xa1]|[^\\P{Mc}\x01-\xa1]|[^\\P{Nd}\x01-\xa1]|[^\\P{Pc}\x01-\xa1]|[^\\P{Sk}\x01-\xa1]|[^\\P{Me}\x01-\xa1]|[^\\P{No}\x01-\xa1]|[′-‷⁗]|[^\\P{So}←-⇿])*(?:{.*})?)?",name:"meta.type.julia"}]}},scopeName:"source.julia",embeddedLangs:["cpp","python","javascript","r","sql"]});var u=[...t.default,...o.default,...i.default,...r.default,...l.default,p]}}]);