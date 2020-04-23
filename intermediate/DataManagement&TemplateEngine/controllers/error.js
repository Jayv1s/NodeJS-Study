exports.notFound = (req, res) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' }); //passing the file that I want to open (404) and page title to set then dynamically
}