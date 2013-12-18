NPM_BIN?= ./node_modules/.bin
CSSCOMB_DIRS?= blocks

.PHONY: all
all:: clean
all:: install
all:: dev

# remove builded files
.PHONY: clean
clean::
	rm -f `find ./app/*/* ! -name '*bemdecl.js'`

# install dependenses
.PHONY: install
install::
	npm install

# rebuild project (use it when adding new files)
.PHONY: rebuild
rebuild::
	./node_modules/enb/bin/enb make

# rebuild project and use development configs
.PHONY: dev
dev:: csscomb
dev::
	$(info ===> Пересобираем (development mode))
	@ YENV=development ./node_modules/enb/bin/enb make

# rebuild project and use productions configs
.PHONY: prod
prod:: csscomb
prod::
	$(info ===> Пересобираем (production mode))
	@ YENV=production ./node_modules/enb/bin/enb make

# css coding style formatting
.PHONY: csscomb
csscomb::
	$(info ===> Причесываем стили)
	@ $(NPM_BIN)/csscomb $(CSSCOMB_DIRS) -v


