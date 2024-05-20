module.exports = ({ env }) => ({
    slugify: {
        enabled: true,
        config: {
            shouldUpdateSlug: true,
            contentTypes: {
                restaurant: {
                  field: 'Slug',
                  references: 'Name',
                },
            },
        }
    }
});
