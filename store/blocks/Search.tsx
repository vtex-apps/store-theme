import Layout from './components/Search/Layout'

const DEFAULT_CONTEXT = { context: { skusFilter: 'FIRST_AVAILABLE' } }

export default function Search() {
  return (
    <>
      <template
        name="store.search"
        props={DEFAULT_CONTEXT}
      >
        <Layout />
      </template>
      <template
        name="store.search#brand"
        props={{
          context: {
            orderByField: 'OrderByReleaseDateDESC',
            hideUnavailableItems: true,
            maxItemsPerPage: 10,
            skusFilter: 'FIRST_AVAILABLE',
          },
        }}
      >
        <Layout />
      </template>

      {['department', 'category', 'subcategory'].map((type, id) => {
        <template name={`store.search#${type}`} props={DEFAULT_CONTEXT}>
          <Layout />
        </template>
      })}

    </>
  )
}
