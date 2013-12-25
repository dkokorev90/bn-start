NPM_BIN?= ./node_modules/.bin
JSCS ?= $(NPM_BIN)/jscs
JSHINT ?= $(NPM_BIN)/jshint-groups
CSSCOMB ?= $(NPM_BIN)/csscomb
CHECK_DIRS?= blocks configs

all:: clean install app dev

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
	$(info ===> Rebuilding (production mode))
	@ rm -rf .bem/tmp && rm -rf _freeze
	@ YENV=production ./node_modules/enb/bin/enb make
	@ borschik freeze -i app/*/ > freeze-info.json

.PHONY: dev prod rebuild

# css coding style formatting
csscomb::
	$(info ===> CSS style formating)
	@ $(NPM_BIN)/csscomb $(CHECK_DIRS) -v

# js code checking
lint::
	$(info ===> JS code checking)
	@ $(JSHINT)
	@ $(JSCS) $(CHECK_DIRS)

.PHONY: csscomb lint
