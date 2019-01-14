cd build
mv index.html front-page.php

echo "<?php

require 'front-page.php';
" > index.php

zip -r ../hc.zip *
