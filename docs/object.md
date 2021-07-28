# Object

- [`keys`](#keys)
- [`property`](#property)
- [`toArray`](#toarray)
- [`defaults`](#defaults)

You can check the module import [`here`](./modules.md).

#### keys

Returns the array of keys of the given object or array.

##### File

```typescript
import { NgKeysPipeModule } from 'kles-ng-pipe';
```

##### Usage

```javascript
const value = {
  a: 1,
  b: 2,
  c: 3,
};
```

```html
{{ value | keys }}
<!-- ['a', 'b', 'c'] -->
{{ [1, 2, 3] | keys }}
<!-- ['0', '1', '2'] -->
```

#### property

Returns the value of the object's property

##### File

```typescript
import { NgPropertyPipeModule } from 'kles-ng-pipe';
```

##### Usage

```javascript
const value = {
  a: 1,
  b: 2,
  c: 3,
};
```

```html
{{ value | property:'b' }}
<!-- 2 -->
```

#### toArray

Transforms an object to an array

##### File

```typescript
import { NgToArrayPipeModule } from 'kles-ng-pipe';
```

##### Usage

```javascript
const value = {
  a: 1,
  b: 2,
  c: 3,
};
```

```html
{{ value | toArray }}
<!-- [1, 2, 3] -->
```

#### defaults

Apply defaults value to an object or an object in an array.

When applied to an array, the non object values will be left unchanged. The nulls and undefineds will be changed
to the defaults.

##### File

```typescript
import { NgDefaultsPipeModule } from 'kles-ng-pipe';
```

##### Usage

```javascript
const d = {
  a: 1,
  b: 2,
  c: 3,
};

const object = {
  a: 2,
};

const array = [{ a: 2 }, null, { b: 3 }, undefined];
```

```html
{{ object | defaults: d }}
<!-- { a: 2, b: 2, c: 3 } -->
{{ array | defaults: d }}
<!-- [{ a: 2, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }, { a: 1, b: 3, c: 3 }, { a: 1, b: 2, c: 3 }]-->
```
