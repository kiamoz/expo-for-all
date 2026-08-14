const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

module.exports = function withCpp17Fix(config) {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const podfilePath = path.join(
        config.modRequest.platformProjectRoot,
        'Podfile'
      );

      let podfile = fs.readFileSync(podfilePath, 'utf8');

      const flag =
        '-D_LIBCPP_ENABLE_CXX17_REMOVED_UNARY_BINARY_FUNCTION';

      if (podfile.includes(flag)) {
        return config;
      }

      const postInstall = 'post_install do |installer|';

      if (podfile.includes(postInstall)) {
        podfile = podfile.replace(
          postInstall,
          `${postInstall}
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['OTHER_CPLUSPLUSFLAGS'] = [
        '$(inherited)',
        '${flag}'
      ]
    end
  end
`
        );
      }

      fs.writeFileSync(podfilePath, podfile);

      return config;
    },
  ]);
};