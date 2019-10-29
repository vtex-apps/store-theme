# Creating a Carousel using lists and slider-layout

There's a special kind of blocks on Store Framework, which don't exactly represent components that should be rendered, but rather carry data and provide it to their children blocks. These blocks are called `lists`, which are simply instances of a `list-context` interface, exported by the `vtex.list-context` app.

Let's take a look at how you can use one of the available instances of a `list-context`, the `list-context.image-list` block , along-side the `slider-layout` block to create a Carousel.

## Dependencies

Make sure you're using `vtex.store@2.70.0` or later, and add the following dependencies to your theme's `manifest.json` file:

```json
"vtex.store-image": "0.x",
"vtex.slider-layout": "0.x"
```

That should be enough for you to use both blocks.

## The list-context.image-list block

The first thing you have to do is to declare your list of images (editable via Site Editor) using the `list-context.image-list` block, which has `"composition": "children"`, and use a `slider-layout` as its only children.

Each image should be passed to `list-context.image-list` as an object with the following properties:

| Property      | Type                                                                                                                                | Description                                                | Default value |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------- |
| `image`       | `String`                                                                                                                            | Link for the image                                         | N/A           |
| `mobileImage` | `String`                                                                                                                            | Link for the mobile image                                  | N/A           |
| `description` | `String`                                                                                                                            | The image's description                                    | N/A           |
| `link`        | [`Link`](https://github.com/vtex-apps/native-types/blob/f63aeeb8f6e62f4a9aaec052a8be34973be7389b/pages/contentSchemas.json#L52-L74) | Specifies the link the image will redirect when clicked on | N/A           |

Here is an example on how to declare a image-list containing two images:

```json
"list-context.image-list#demo": {
    "children": ["slider-layout#demo-images"],
    "props": {
      "height": 650,
      "images": [
        {
          "image": "https://storecomponents.vteximg.com.br/arquivos/banner-infocard2.png",
          "description": "something something"
        },
        {
          "image": "https://storecomponents.vteximg.com.br/assets/vtex.file-manager-graphql/images/Group%207%20(1)%20(1)%20(1)%20(1)%20(1)___c6b3ed853fb16a08b265753b50e0c57a.png",
          "description": "something something"
        }
      ]
    }
  },
```

Remember that the `list-context` blocks do NOT render anything, they simply hold content that can be edited using the Site Editor and pass it down to their children blocks.

## Using the slider-layout block

The `slider-layout` block is a generic layout block, much like `flex-layout`, that enables you to create a Slider component out of a set of other blocks.

Since we have already have our `list-context.image-list` block _around_ (this is very important, maybe find a way to make it clearer) a `slider-layout#demo-images` block, we just to need to configure our slider. 

The `slider-layout` block can read data from any `list-context`s wrapped around it, so you already have the data that will result in your set of slides. Keep in mind that a Carousel is nothing but a Slider with a list of images inside of it, that's what you're going for here. 

Finally, this is the final bits of code to make your Carousel:

```json
  "list-context.image-list#demo": {
    "children": ["slider-layout#demo-images"],
    "props": {
      "height": 650,
      "images": [
        {
          "image": "https://storecomponents.vteximg.com.br/arquivos/banner-infocard2.png",
          "description": "something something"
        },
        {
          "image": "https://storecomponents.vteximg.com.br/assets/vtex.file-manager-graphql/images/Group%207%20(1)%20(1)%20(1)%20(1)%20(1)___c6b3ed853fb16a08b265753b50e0c57a.png",
          "description": "something something"
        }
      ]
    }
  },

  "slider-layout#demo-images": {
    "props": {
      "itemsPerPage": {
        "desktop": 1,
        "tablet": 1,
        "phone": 1
      },
      "infinite": true
    }
  }
```

There you go! You should have a fully functioning Carousel and should be able to edit it using our Site Editor.

## Examples:

Bia, esse é o workspace com um exemplo linkado, na página de About Us:

- <https://lists--storecomponents.myvtex.com/about-us>
- <https://lists--storecomponents.myvtex.com/admin/cms/site-editor/about-us> (pra ver a edição no Site Editor)
