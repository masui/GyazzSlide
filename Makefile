#
# Firefox拡張機能用のxpiを作る
#
XPIFILES=manifest.json slide.js slide_bg.js icons
xpi:
	/bin/rm -f gyazzslide.xpi
	zip -r gyazzslide.xpi ${XPIFILES}

sign: xpi
	web-ext sign --api-key $(MOZILLA_USER) --api-secret $(MOZILLA_SECRET)
	/bin/cp web-ext-artifacts/`ls -1 -t web-ext-artifacts | head -1` gyazzslide.xpi
