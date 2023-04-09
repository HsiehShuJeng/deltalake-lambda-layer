# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeltaLakeLayer <a name="DeltaLakeLayer" id="deltalake-lambda-layer.DeltaLakeLayer"></a>

#### Initializers <a name="Initializers" id="deltalake-lambda-layer.DeltaLakeLayer.Initializer"></a>

```typescript
import { DeltaLakeLayer } from 'deltalake-lambda-layer'

new DeltaLakeLayer(scope: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#deltalake-lambda-layer.DeltaLakeLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#deltalake-lambda-layer.DeltaLakeLayer.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="deltalake-lambda-layer.DeltaLakeLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="deltalake-lambda-layer.DeltaLakeLayer.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#deltalake-lambda-layer.DeltaLakeLayer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="deltalake-lambda-layer.DeltaLakeLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#deltalake-lambda-layer.DeltaLakeLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="deltalake-lambda-layer.DeltaLakeLayer.isConstruct"></a>

```typescript
import { DeltaLakeLayer } from 'deltalake-lambda-layer'

DeltaLakeLayer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="deltalake-lambda-layer.DeltaLakeLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#deltalake-lambda-layer.DeltaLakeLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#deltalake-lambda-layer.DeltaLakeLayer.property.layer">layer</a></code> | <code>aws-cdk-lib.aws_lambda.LayerVersion</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="deltalake-lambda-layer.DeltaLakeLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `layer`<sup>Required</sup> <a name="layer" id="deltalake-lambda-layer.DeltaLakeLayer.property.layer"></a>

```typescript
public readonly layer: LayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LayerVersion

---





