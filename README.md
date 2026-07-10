# Teja Vikas — Portfolio

A single-page portfolio site built from your resume, styled as a "system status dashboard" (fitting, given the observability/monitoring tools on your stack — Grafana, Prometheus, Splunk).

## What's in here
- `index.html` — the whole site (HTML, CSS and JS in one file, no build step, no dependencies to install)
- `resume.pdf` — your resume, linked from the "Download résumé" button

## Deploy it on GitHub Pages (free, ~5 minutes)

1. **Create a new repository** on GitHub. Name it whatever you like — if you want it at `https://<your-username>.github.io/`, name the repo exactly `<your-username>.github.io`. Otherwise any name works and it'll be served at `https://<your-username>.github.io/<repo-name>/`.

2. **Upload these two files** (`index.html` and `resume.pdf`) to the root of that repository. Easiest way: on the repo page, click **Add file → Upload files**, drag both files in, and commit.

   Or, from a terminal:
   ```bash
   git init
   git add index.html resume.pdf
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on Pages**: in the repo, go to **Settings → Pages**. Under "Build and deployment," set **Source** to "Deploy from a branch," pick branch `main` and folder `/ (root)`, then save.

4. Wait about a minute, then visit the URL GitHub shows you on that same settings page. That's your live portfolio.

## Editing later
- Everything is plain HTML/CSS/JS in `index.html` — open it in any text editor. Text content, dates, links and skill tags are all in the markup, no build tools needed.
- To swap the résumé PDF, just replace `resume.pdf` with a new file of the same name.
- Your email, phone, and LinkedIn link are in the hero and contact sections near the top and bottom of the file — search for `mailto:` and `tel:` to find them fast.
