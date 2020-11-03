# String

- [`leftpad`](#leftpad)
- [`rightpad`](#rightpad)
- [`pad`](#pad)
- [`trim`](#trim)
- [`split`](#split)
- [`replace`](#replace)
- [`match`](#match)
- [`test`](#test)
- [`newlines`](#newlines)
- [`capitalize`](#capitalize)
- [`upperfirst`](#upperfirst)
- [`template`](#template)
- [`encodeURI`](#encodeuri)
- [`encodeURIComponent`](#encodeuricomponent)
- [`decodeURI`](#decodeuri)
- [`decodeURIComponent`](#decodeuricomponent)
- [`repeat`](#repeat)
- [`truncate`](#truncate)
- [`slugify`](#slugify)
- [`stripTags`](#striptags)
- [`latinize`](#latinize)
- [`wrap`](#wrap)
- [`with`](#with)
- [`reverseStr`](#reversestr)

You can check the module import [`here`](./modules.md).

#### leftpad

Returns a left-padded string.

##### File

```typescript
import { NgLeftPadPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'aaa' | leftpad: 4 }}
<!-- ' aaa' -->
{{ 'aaa' | leftpad: 3 }}
<!-- 'aaa' -->
{{ 'aaa' | leftpad: 5: 'b' }}
<!-- 'bbaaa' -->
```

#### rightpad

Returns a right-padded string.

##### File

```typescript
import { NgRightPadPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'aaa' | rightpad: 4 }}
<!-- 'aaa ' -->
{{ 'aaa' | rightpad: 3 }}
<!-- 'aaa' -->
{{ 'aaa' | rightpad: 5: 'b' }}
<!-- 'aaabb' -->
```

#### pad

Returns a padded string. It starts with left and then right.

##### File

```typescript
import { NgPadPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'aaa' | pad: 4 }}
<!-- ' aaa' -->
{{ 'aaa' | pad: 5 }}
<!-- ' aaa ' -->
{{ 'aaa' | pad: 5: 'b' }}
<!-- 'baaab' -->
```

#### trim

Trims the string.

##### File

```typescript
import { NgTrimPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'aaa' | trim }}
<!-- 'aaa' -->
{{ 'aaa ' | trim }}
<!-- 'aaa' -->
{{ ' aaa ' | trim }}
<!-- 'aaa' -->
```

#### split

Split a string into an array.

##### File

```typescript
import { NgSplitPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'Hello World' | split }}
<!-- ['Hello', 'World'] -->
{{ 'ABABA' | split: 'B' }}
<!-- ['A', 'A', 'A'] -->
{{ 'ABABA' | split: 'B': 2 }}
<!-- ['A', 'A'] -->
```

#### replace

This is the `String#replace()` function, if you want to know more about the arguments, check the official documentation.

##### File

```typescript
import { NgReplacePipeModule } from 'kles-ng-pipe';
```

#### match

This is the `String#match()` function, if you want to know more about the arguments, check the official documentation.

##### File

```typescript
import { NgMatchPipeModule } from 'kles-ng-pipe';
```

#### test

This is the `String#test()` function, if you want to know more about the arguments, check the official documentation.

##### File

```typescript
import { NgTestPipeModule } from 'kles-ng-pipe';
```

#### newlines

Replaces the `\n`, `\r` and `\r\n` into `<br />`. This function returns HTML so you need to use it  
with the `[innerHTML]` binding.

##### File

```typescript
import { NgNewlinesPipeModule } from 'kles-ng-pipe';
```

##### Usage

```javascript
this.value = 'Hello, World. \nHow are you ?';
```

```html
<span [innerHTML]="value | newlines"></span>

<!-- Resulting dom
<span>
    Hello, World. <br /> How are you ?
</span>
-->

<!-- Resulting display
Hello, World.
How are you ?
-->
```

#### capitalize

Capitalize the string. If the argument is true, all the words will be capitalized.

##### File

```typescript
import { NgCapitalizePipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'hello world' | capitalize }}
<!-- 'Hello world' -->
{{ 'hello world' | capitalize: true }}
<!-- 'Hello World' -->
{{ 'hELLo wOrld' | capitalize: true }}
<!-- 'Hello World' -->
```

#### upperfirst

Uppercase the first letter.

##### File

```typescript
import { NgUpperFirstPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'hello world' | upperfirst }}
<!-- 'Hello world' -->
```

#### template

Template string.

##### File

```typescript
import { NgTemplatePipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ "Hello $1, it's $2" | template: 'world': 'me' }}
<!-- 'Hello world, it's me' -->
```

#### encodeuri

The encodeURI function.

##### File

```typescript
import { NgEncodeURIPipeModule } from 'kles-ng-pipe';
```

#### encodeuricomponent

The encodeURIComponent function.

##### File

```typescript
import { NgEncodeURIComponentPipeModule } from 'kles-ng-pipe';
```

#### decodeuri

The decodeURI function.

##### File

```typescript
import { NgDecodeURIPipeModule } from 'kles-ng-pipe';
```

#### decodeuricomponent

The decodeURIComponent function.

##### File

```typescript
import { NgDecodeURIComponentPipeModule } from 'kles-ng-pipe';
```

#### repeat

Repeats a string.

##### File

```typescript
import { NgRepeatPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'a' | repeat: 2 }}
<!-- 'aa' -->
{{ 'a' | repeat: 2: 'b' }}
<!-- 'aba' -->
```

#### truncate

Truncate a string.

Arguments: \(size, suffix, preserve\)

##### File

```typescript
import { NgTruncatePipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'Hello World' | truncate: 4 }}
<!-- 'Hell' -->
{{ 'Hello World' | truncate: 4: '': true }}
<!-- 'Hello' -->
{{ 'Hello World' | truncate: 4: '...': true }}
<!-- 'Hello...' -->
{{ 'Hello World, how is it going?' | truncate: 14: '...': true }}
<!-- 'Hello World, how...' -->
```

#### slugify

Slugify a string.

Arguments: \(string\)

##### File

```typescript
import { NgSlugifyPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'The zombie world war began' | slugify }}
<!-- 'the-zombie-world-war-began' -->
```

#### striptags

strip out html tags from string  
**Important: this Pipe jobs it's not to replace innerHtml directive, it's only for tiny plain text**

Arguments: \( string, ends, case-sensitive\[optional\] \)

##### File

```typescript
import { NgStripTagsPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
var text = '
<p class="paragraph">Lorem Ipsum is simply dummy text of the printing...</p>
';
<p>{{ text | stripTags }}</p>
<!--result: Lorem Ipsum is simply dummy text of the printing... -->
```

#### latinize

Remove accents/diacritics from a string

##### File

```typescript
import { NgLatinizePipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'Sòme strÏng with Âccénts' | latinize }}
<!-- result: Some strIng with Accents -->
```

#### wrap

Wrap a string with another string

Arguments: \( string, string, string\[optional\] \)

##### File

```typescript
import { NgWrapPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
<p>{{ 'foo' | wrap: '/' }}</p>
<!--result: /foo/ -->
<p>{{ 'foo' | wrap: '{{': '}}' }}</p>
<!--result: {{foo}} -->
```

#### with

With pipe check string has start and/or ends

Arguments: \( string, start\[optional\], ends\[optional\], case-sensitive\[optional\] \)

##### File

```typescript
import { NgWithPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{'The Flash Reverse' | with: 'The' : null, true}}
<!-- result: true -->
{{'The Flash Reverse' | with: 'The' : 'Reverse' : true}}
<!-- result: true-->
{{'The Flash Reverse' | with: 'The' : 'Reverse'}}
<!-- result: true-->
{{'The Flash Reverse' | with: 'the' : 'reverse'}}
<!-- result: true-->
{{'The Flash Reverse' | with: 'the' : 'Reverse' : true}}
<!-- result: false-->
{{'The Flash Reverse' | with: 'the' : 'reverse' : true}}
<!-- result: false-->
{{'The Flash Reverse' | with: 'Blue' : 'Reverse' : true}}
<!-- result: false-->
{{'The Flash Reverse' | with: 'The' : 'Black' : true}}
<!-- result: false-->
{{'The Flash Reverse' | with: '' : 'Black' : true}}
<!-- result: false-->
{{'The Flash Reverse' | with: '' : '' : true}}
<!-- result: 'The Flash Reverse'-->
{{'The Flash Reverse' | with: null : null : true}}
<!-- result: 'The Flash Reverse'-->
{{'The Flash Reverse' | with: null : null}}
<!-- result: 'The Flash Reverse'-->
{{'The Flash Reverse' | with}}
<!-- result: 'The Flash Reverse'-->
```

#### reversestr

Reverse a string.

##### File

```typescript
import { NgReverseStrPipeModule } from 'kles-ng-pipe';
```

##### Usage

```html
{{ 'hello world' | reverseStr }}
<!-- 'dlrow olleh' -->
```
