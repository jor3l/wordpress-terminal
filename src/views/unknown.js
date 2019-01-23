import Type from '../type';

export default {
  title: "unknown command",
  view: ctrl => {
    return (
      <Type
        strings={[
          `unknown command '${m.route.param(
            "str"
          )}'. type 'help' for a list of available ones.`,
          __("type 'back' to return.")
        ]}
      />
    );
  }
};
