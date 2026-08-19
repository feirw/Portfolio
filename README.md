# Eleni Zafeiri — Personal Portfolio

Personal website of [Eleni Zafeiri](https://elenizafeiri.com/), a 3rd-year Informatics and Telecommunications student at NKUA. It presents education, work, [TechnotesGR](https://www.technotes.gr/), hackathons, certificates, volunteer work, and contact.

**Live:** [elenizafeiri.com](https://elenizafeiri.com/)

## Stack

- React 19 (Create React App)
- React Router
- Tailwind CSS
- Lucide icons

Content lives in `frontend/src/components/data/mock.js` — no backend required.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

## Project layout

```
frontend/
  public/          # favicon, robots.txt, sitemap.xml, llms.txt, assets
  src/
    App.js         # routes (home, privacy, terms, 404)
    site.js        # site URL and SEO defaults
    components/
      data/mock.js # all portfolio copy
      Hero.jsx, About.jsx, Experience.jsx, Projects.jsx, …
```

## Edit content

Update `frontend/src/components/data/mock.js` for bio, experience, hackathons, projects, certificates, and social links.

Site URL, meta description, and analytics ID are in `frontend/src/site.js`.

## Optional environment

Create `frontend/.env` if you want Google Analytics (loads only after cookie consent):

```
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home |
| `/privacy` | Privacy policy |
| `/terms` | Terms of use |

## License

Personal project. Content belongs to Eleni Zafeiri.
