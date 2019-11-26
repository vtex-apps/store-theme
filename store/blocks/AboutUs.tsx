import { FlexLayout } from 'vtex.flex-layout'
import { RichText } from 'vtex.rich-text'
import { Image } from 'vtex.store-components'

export default function AboutUs() {
  return (
    <template name="store.custom#about-us">
      <FlexLayout.Row __id="about-us">
        <Image
          __id="mobile-phone"
          src="https://storecomponents.vteximg.com.br/arquivos/mobile-phone.png"
          maxHeight=""
          maxWidth=""
          blockClass="storePrint"
        />
      </FlexLayout.Row>
      <FlexLayout.Col
        __id="text-about-us"
        blockClass="textColumn"
        preventVerticalStretch
      >
        <RichText
          __id="title-about-us"
          blockClass="title"
          text="# Create meaningful and relevant experiences."
        />
        <RichText
          __id="about-us"
          blockClass="about"
          text={`**Optimized store framework** \n Free your front-end with our React + Node store framework. Improve usability and SEO, while driving more conversion with modular components, single page applications, and a ready-for-PWA structure. \n **Multi-currency and language** \n Go international with multiple storefronts to support different languages and easily manage local currencies and payment conditions. \n **Serverless development platform** \n Reduce loading time, improve usability, and make the best out of SEO. Developing scalable components with a comprehensive, easy-to-use toolset, you can build stores faster than ever.`}
        />
      </FlexLayout.Col>
    </template>
  )
}
