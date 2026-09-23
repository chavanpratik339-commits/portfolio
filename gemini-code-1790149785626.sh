# Initialize git repository (if using terminal)
git init
git add .
git commit -m "Complete portfolio project"

# Link to your remote GitHub repository and push
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main