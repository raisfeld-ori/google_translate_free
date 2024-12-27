# Free google translate

I realized every package I found for translations required an API key and money, even though
google translate is free. I couldn't find any free options so I made my own.

## Usage

Here is a simple code to show how to use the package:

```ts
import translate from 'google_translate_free';
const response: string = await translate('Text here', "The text's language", "the language you want to translate into");
```

another example:

```ts
import translate from 'google_translate_free';
const response: string = await translate("I love no paying for products", "en", "fr");
```
