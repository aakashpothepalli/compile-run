import { runCppFile ,compileFileAndReturnPromise} from './run-file';
import { runCppSource } from './run-source';
import { runExecutable } from "../executable/execute-executable";

const cpp = {
    runFile: runCppFile,
    runSource: runCppSource,
    runExecutable:runExecutable,
    compileCppFile:compileFileAndReturnPromise
};

export default cpp;
