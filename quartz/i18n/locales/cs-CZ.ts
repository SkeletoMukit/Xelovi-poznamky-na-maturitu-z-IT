import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Bez názvu",
    description: "Neuveden žádný popis",
  },
  components: {
    callout: {
      note: "Poznámka",
      abstract: "Abstrakt",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Úspěch",
      question: "Otázka",
      warning: "Varování",
      failure: "Selhání",
      danger: "Nebezpečí",
      bug: "Bug",
      example: "Příklad",
      quote: "Citace",
    },
    backlinks: {
      title: "Zpětné odkazy",
      noBacklinksFound: "Nalezeny žádné zpětné odkazy",
    },
    themeToggle: {
      lightMode: "Světlý režim",
      darkMode: "Tmavý režim",
    },
    explorer: {
      title: "Průzkumník",
    },
    footer: {
      createdWith: "Vytvořeno s",
    },
    graph: {
      title: "Zobrazení grafu",
    },
    recentNotes: {
      title: "Nedávné poznámky",
      seeRemainingMore: ({ remaining }) => `Viz ${remaining} více →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transkluze z ${targetSlug}`,
      linkToOriginal: "Odkaz na originál",
    },
    search: {
      title: "Hledat",
      searchBarPlaceholder: "Hledat v poznámkách",
    },
    tableOfContents: {
      title: "Obsah",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min čtení`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Nedávné poznámky",
      lastFewNotes: ({ count }) => `Posledních ${count} poznámek`,
    },
    error: {
      title: "Nenalezeno",
      notFound: "Buď je tato stránka soukromá, nebo neexistuje.",
    },
    folderContent: {
      folder: "Složka",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 položka v této složce." : `${count} položek v této složce.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 položka s touto značkou." : `${count} položek s touto značkou.`,
      showingFirst: ({ count }) => `Zobrazeno prvních ${count} tagů.`,
      totalTags: ({ count }) => `Nalezeno ${count} tagů celkem.`,
    },
  },
} as const satisfies Translation
