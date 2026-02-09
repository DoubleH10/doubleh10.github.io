.PHONY: dev restart build lint preview clean

dev:
	npm run dev

restart:
	@echo "Restarting dev server..."
	@lsof -ti:8080 | xargs kill -9 2>/dev/null || true
	npm run dev

build:
	npm run build

lint:
	npm run lint

preview:
	npm run preview

clean:
	rm -rf dist node_modules/.vite
