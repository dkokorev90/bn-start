NPM_BIN?= ./node_modules/.bin
JSCS ?= $(NPM_BIN)/jscs
JSHINT ?= $(NPM_BIN)/jshint-groups
CSSCOMB ?= $(NPM_BIN)/csscomb
CHECK_DIRS?= blocks configs

all:: clean install dev

# remove builded files
clean::
	rm -f `find ./app/*/* ! -name '*bemdecl.js'`

# install dependenses
install::
	npm install

.PHONY: all install clean

# rebuild project (use it when adding new files)
rebuild::
	./node_modules/enb/bin/enb make

# rebuild project and use development configs
dev:: lint csscomb
	$(info ===> Rebuilding (development mode))
	@ YENV=development ./node_modules/enb/bin/enb make

# rebuild project and use productions configs
prod:: lint csscomb
prod::
	$(info ===> Rebuilding (production mode))
	@ YENV=production ./node_modules/enb/bin/enb make

.PHONY: dev prod rebuild

# css coding style formatting
csscomb::
	$(info ===> CSS style formating)
	@ $(NPM_BIN)/csscomb $(CHECK_DIRS) -v

# js code checking
lint::
	$(info ===> JS coding style checking)
	$(info > JSHINT)
	@ $(JSHINT)
	$(info > JSCS)
	@ $(JSCS) $(CHECK_DIRS)

.PHONY: csscomb lint
