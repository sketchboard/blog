blog:
	cleancss css/custom.css -o css/custom.min.css
	@echo `md5 -q css/custom.min.css`-custom.min.css
	mv css/custom.min.css css/`md5 -q css/custom.min.css`-custom.min.css
	cleancss css/navigation.css -o css/navigation.min.css
	@echo `md5 -q css/navigation.min.css`-navigation.min.css
	mv css/navigation.min.css css/`md5 -q css/navigation.min.css`-navigation.min.css
	cleancss css/pure-custom.css -o css/pure-custom.min.css
	@echo `md5 -q css/pure-custom.min.css`-pure-custom.min.css
	mv css/pure-custom.min.css css/`md5 -q css/pure-custom.min.css`-pure-custom.min.css
	cleancss css/pure-custom2.css -o css/pure-custom2.min.css
	@echo `md5 -q css/pure-custom2.min.css`-pure-custom2.min.css
	mv css/pure-custom2.min.css css/`md5 -q css/pure-custom2.min.css`-pure-custom2.min.css
	cleancss stylesheets/styles.css -o stylesheets/styles.min.css
	@echo `md5 -q stylesheets/styles.min.css`-styles.min.css
	mv stylesheets/styles.min.css stylesheets/`md5 -q stylesheets/styles.min.css`-styles.min.css

build: blog
	find css -name '*-marketing-custom2.min.css' -exec rm -f {} +
	lessc -x css/marketing-custom2.css css/marketing-custom2.min.css
	mv css/marketing-custom2.min.css css/`md5 -q css/marketing-custom2.min.css`-marketing-custom2.min.css
	find css -name '*-marketing-custom2.min.css'
	find css -name '*-marketing-webkit.min.css' -exec rm -f {} +
	lessc -x css/marketing-anim-webkit.css css/marketing-anim-webkit.min.css
	mv css/marketing-anim-webkit.min.css css/`md5 -q css/marketing-anim-webkit.min.css`-marketing-webkit.min.css
	find css -name '*-marketing-webkit.min.css'
	make -C ../aslides build
	cp ../aslides/*-aslides.min.js js/
	cleancss css/hipchat.css -o css/hipchat.min.css
	@echo `md5 -q css/hipchat.min.css`-hipchat.min.css
	mv css/hipchat.min.css css/`md5 -q css/hipchat.min.css`-hipchat.min.css
	minish js/header.js js
	cleancss css/header.css -o css/header.min.css
	@echo `md5 -q css/header.min.css`-header.min.css
	mv css/header.min.css css/`md5 -q css/header.min.css`-header.min.css
	bundle exec jekyll build
	
.PHONY: blog