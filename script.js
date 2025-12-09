// PCA Embedding Plot
vegaEmbed("#pca", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    url: "pca_embeddings.csv"
  },
  mark: "point",
  encoding: {
    x: { field: "PCA_1", type: "quantitative", axis: { title: "Component 1" }},
    y: { field: "PCA_2", type: "quantitative", axis: { title: "Component 2" }},
    color: { field: "NetworkNum", type: "nominal", legend: { title: "Network" }},
    tooltip: [
      { field: "NetworkNum", type: "nominal" }
    ]
  }
});

// UMAP Embedding Plot
vegaEmbed("#umap", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    url: "umap_embeddings.csv"
  },
  mark: "point",
  encoding: {
    x: { field: "UMAP_1", type: "quantitative", axis: { title: "UMAP Dim 1" }},
    y: { field: "UMAP_2", type: "quantitative", axis: { title: "UMAP Dim 2" }},
    color: { field: "NetworkNum", type: "nominal", legend: { title: "Network" }},
    tooltip: [
      { field: "NetworkNum", type: "nominal" }
    ]
  }
});
