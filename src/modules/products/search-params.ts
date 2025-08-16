import { createLoader, parseAsString, parseAsArrayOf, parseAsStringLiteral } from "nuqs/server";

export const sortValue = ["Curated", "trending", "new_and_hot"] as const;
 const params = {
    sort: parseAsStringLiteral(sortValue).withDefault("Curated"),
            minPrice: parseAsString
        .withOptions({
            clearOnDefault: true,

        })
        .withDefault(""),
        maxPrice: parseAsString
        .withOptions({
            clearOnDefault: true,
        })
        .withDefault(""),
        tags: parseAsArrayOf(parseAsString)
            .withOptions({
                clearOnDefault:true,

            })
            .withDefault([]),

};

export const loadProductFilters = createLoader(params);